---
title: Data servers
sidebar_label: Data servers
sidebar_position: 1
id: configure

---
Data servers monitor specific tables or views in the database. When a change in data occurs, the data server makes the changed data available to the User Interface.

The data server configuration is refreshingly light, because all the hard work is done by the views.

You need to define queries to handle each event in the required way. You can define any number of queries. A query can be on to an individual table or view. All the details of the table or view are inherited from the definition, so you don’t need to supply any further details.

The initial run of the query serves all the data that is defined by the table or view. From then on, it automatically monitors the user who has requested the data. Whenever a value in the underlying table or view changes, that change is sent to the user. In this way, the user’s data is maintained up to date in real time, without the unnecessary burden of sending the whole data set each time there is a change.

Note that any table or view that you are monitoring might contain a join. By default, the fields that are joined are not monitored for updates - typically these are used for reference data that does not change intraday. If you need these fields to be monitored in real time along with the fields in the primary table, then you need to use a backwards join (see below).

Typically in Genesis, each module has its own data server process, which points at this configuration.

## Configuration settings

Example configuration settings below:

```kotlin
dataServer {
    config {
        lmdbAllocateSize = 512.MEGA_BYTE() // top level only setting
        // Items below can be overriden in individual query definitions
        compression = true 
        chunkLargeMessages = true
        defaultStringSize = 40
        batchingPeriod = 500
        linearScan = true
        excludedEmitters = listOf("PurgeTables")
        enableTypeAwareCriteriaEvaluator = true
    }
    query("SIMPLE_QUERY", SIMPLE_TABLE) {
        config {
            // Items below only available in query level config
            defaultCriteria = "SIMPLE_PRICE > 0"
            backJoins = false
            disableAuthUpdates = false
        }
    }
}
```

### Global settings

**Top level only settings**

**lmdbAllocateSize**: sets the size of the memory mapped file of the in-memory cache used to store dataserver query rows. This configuration seeting can only be applied at the top level and affects the whole dataserver. 

Please note that this is the size in bytes, to use MB or GB use the `MEGA_BYTE` or `GIGA_BYTE` functions. Defaults to 2 GB.

Sample:
```kotlin
lmdbAllocateSize = 2.GIGA_BYTE()
// or
lmdbAllocateSize = 512.MEGA_BYTE()
```

**Top level and query level settings** 

**compression**: if true, it will compress query row data before writing it to the in-memory cache. Defaults to `false`.

**chunkLargeMessages**: if true, it will split large updates into smaller ones. Defaults to `false`.

**defaultStringSize**: size to be used for string storage in the dataserver in-memory cache. Higher values lead to higher memory use and lower values to truncation. Defaults to `40`.

**batchingPeriod**: delay in millseconds to wait before sending new data to dataserver clients. Defaults to `500ms`.

**linearScan**: enables linear scan behaviour in the query definition. If false, it will reject criteria expressions which don't hit defined indexes. Defaults to `true`.

**excludedEmitters**: enables update filtering for a list of process names. Any database updated emitted from one of these processes will be ignored. Defaults to an empty list.

**enableTypeAwareCriteriaEvaluator**: enables the type aware criteria evaluator at the dataserver level. Defaults to `false`. [Click here to read more](#additional-information-on-enabletypeawarecriteriaevaluator)

### Query settings

**defaultCriteria**: represents the default criteria for the query. Defaults to `null`.

**disableAuthUpdates**: Disables real-time auth updates in order to improve overall dataserver responsiveness and performace. Defaults to `false`.

**backJoins**: Enables backward joins on a view query, these need to be configured at the join level of the query to work correctly. Defaults to `false`.

#### Additional information on enableTypeAwareCriteriaEvaluator

The type aware criteria evaluator is able to automatically convert criteria comparisons that don't match the original type of the dataserver field but are still useful to end users. 

For example, it might be desirable for a frontend client to perform a criteria search on a `TRADE_DATE` field like this: `TRADE_DATE > '2015-03-01' && TRADE_DATE < '2015-03-02'`. This search criteria can be automatically translated to the right field types internally (even though `TRADE_DATE` is a field of type `DateTime`) and our index search mechanism can also identify the appropriate search intervals in order to provide an optimised experience. The type aware evaluator can also transform strings to integers and basically any other sensible and possible conversions (e.g `TRADE_ID == '1'`). As a side note, this type aware evaluator is also available in `DbMon` for operations like `search` and `qsearch`.

By contrast, the traditional criteria evaluator needs field types to match the dataserver query fields. So the same comparison using the default criteria evaluator for `TRADE_DATE` would be something like: `TRADE_DATE > new DateTime(1425168000000) && TRADE_DATE < new DateTime(1425254400000)`. This approach is less intuitive and won't work with our automatic index selection mechanism. It is usually preferable to handle date searches in this case using our [common date expressions](#common-expressions).


#### Additional information on backwards joins

As we have seen, each query to a data server creates what is effectively an open connection between each requesting user and the data server. After the initial send of all the data, the data server only sends modifications, deletes and inserts in real time.

However, it is only the primary table or view that is monitored by default. Any views that are joined are not monitored, so changes to these are not sent automatically.

The solution to this is to use a backwards join. Any view that specifies this in the join will be monitored in real time, along with the primary table or view. When creating the data server query, you need to include the statement have **backJoins = true**.

There is a cost to this, as it can cause significant extra processing, so do not use backwards joins unless there is a need for the data in question to be updated in real time. Counterparty data, if changed, can wait until overnight, for example. The rule of thumb is that you should only use backwards joins where the underlying data is being updated intraday.

## Where clauses

These are server-side criteria. If you include a **where** clause, the request is only processed if the criteria specified in the clause are met. For example, If you have an application that deals with derivatives that have parent and child trades, you can use a **where** clause to confine the query only to parent trades.

Also you can use these clauses to focus on a specific set of fields or a single field. You can then use Java syntax, such as **contains**, or string/numeric operations.

Finally, note that **where** clauses can also be used for permissioning. If only users with a specific ID are permitted to have access to this data, you could permission them here.


## Indices

Index sample:

```kotlin
dataServer {
    query("SIMPLE_QUERY", SIMPLE_TABLE) {
        indices {
            unique("SIMPLE_QUERY_BY_QUANTITY") {
                QUANTITY
                SIMPLE_ID
            }
        }
    }
}
```

### Index definition
The **indices** (optional) block defines additional indexing at the query level. When an index is used, it will make all query rows be ordered by the "fields" specified, in an ascending order. This definition is identical to the one defined in data modelling for dictionary tables.

There are two scenarios in which an index will be used:
* The query criteria search can be optimised by using an index. If a dataserver client specifies a criteria such as `QUANTITY > 1000 && QUANTITY < 5000`, the dataserver will automatically select the best matching index, and in our example it would be `SIMPLE_QUERY_BY_QUANTITY`. This means we don't need to scan all the query rows stored in the dataserver memory mapped file cache and instead perform a very efficient indexed search.
* The dataserver client specifies an index. If an `ORDER_BY` value is received as part of the `DATA_LOGON` process, the dataserver will use a specific index to query the data. This means the data will be returned to the client in ascending order based on the index field definition. See more at [Client side (runtime) options](#client-side-runtime-options)

*Important*: Index definitions are currently limited to *unique* indices. As quantity does not have a unique constraint in the example definition shown above, we need to add SIMPLE_ID to the index definition to ensure we maintain uniqueness.



## Advanced features

### Ranged data server queries

It is possible to define ranged data servers. These data servers only cache a defined range of a table or view. This makes the data server more responsive and reduces resource requirements.

Syntax:

```kotlin
query("TRADE_RANGED_LAST_2_HOURS", TRADE) {
    // the ranged key word makes this a ranged query
    //    the index and the number of key fields needs to be specified
    ranged(index = Trade.ByTradeDateTimeAndType, numKeyFields = 1) {
        // optionally refresh keys periodically, for example when we are doing a
        // range on dates
        refresh {
            // either every
            every(2.hours)
            // or at specific time
            at(8.pm)
        }
        // required, starting key
        from {
            Trade.ByTradeDateTime(now().minusHours(2), "")
        }
        // optionally end key
        to {
            Trade.ByTradeDateTime(now().plusHours(1), "")
        }
    }
}
```

Examples

```kotlin
// all dollar trades:
query("TRADE_RANGED_TRADE_RANGE_USD", TRADE) {
    ranged(Trade.ByCurrencyId, 1) {
        from {
            Trade.ByCurrencyId("USD")
        }
    }
}

// all trades with quantity between 100 and 1,000
query("TRADE_RANGED_TRADE_RANGE_QTY", TRADE) {
    ranged(Trade.ByQuantity, 1) {
        from {
            Trade.ByQuantity(100)
        }
        to {
            Trade.ByQuantity(1000)
        }
    }
}

query("TRADE_RANGED_LAST_2_HOURS", TRADE) {
    ranged(index = Trade.ByTradeDateTimeAndType, numKeyFields = 1) {
        refresh {
            every(15.minutes)
        }
        from {
            Trade.ByTradeDateTime(now().minusHours(2), "")
        }
        to {
            Trade.ByTradeDateTime(now().plusHours(1), "")
        }
    }
}
```

With refresh queries, rows that move out of the filter range will be removed from the cache, while rows that move into the filter will be added.

When using **numKeyFields** that is less than the number of fields in the index, dummy values need to be passed into the index constructor.

## Client side (runtime) options

When a client initiates a subscription to a dataserver by sending a **DATA_LOGON** message, there are several options that can be specified. It is important to note that all them are **optional** and therefore they are not required to initiate a subscription. See table below for a detailed explanation of all its features:

| Option         | Default   | Description                                                  |
| -------------- | --------- | ------------------------------------------------------------ |
| MAX_ROWS       | 250       | Maximum number of rows to be returned as part of the initial message, and as part of any additional **MORE_ROWS** messages. |
| MAX_VIEW       | 1000      | Maximum number of rows to track as part of a client "view"   |
| MOVING_VIEW    | **true**  | Defines the behaviour of the client "view" when new rows are received in real-time. If **MOVING_VIEW** is set to true, and **MAX_VIEW** is reached, any new rows arriving to the query will start replacing the oldest rows from the view. This guarantees that only the most recent rows are shown by default. |
| CRITERIA_MATCH |           | Clients can send a Groovy expression to perform filters on the query server that will remain active for the life of the subscription. For example: `Expr.dateIsBefore(TRADE_DATE,'20150518')` or `QUANTITY > 10000` |
| FIELDS         |           | This optional parameter allows to select a subset of fields from the query if the client is not interested in receiving all of them. Example: "TRADE_ID QUANTITY PRICE INSTRUMENT_ID". By default all fields are returned if this option is not specified. |
| ORDER_BY       |           | This option can be used to select a dataserver index (defined in xml), which is especially useful if you want the data to be sorted in a certain way. By default, dataserver rows will be returned by order of creation (from oldest database record to newest). |
| REVERSE        | **false** | This option changes the dataserver index iteration. For example, if we are using the default index, they query will return rows from newest database records to oldest. |

## Common Date/DateTime criteria Expressions

The dataserver criteria supports some common expressions all called using the `Expr` special binding. All of them return a boolean value (`true` or `false`) and are especially helpful for `Date` and `DateTime` client-side filtering. The first parameter is always a query field, which can either represent the epoch time in milliseconds or a `String` value representing the actual `Date` and `DateTime` in the supported formats. The second parameter (if applicable) is a predefined `String` value, also represented using the supported formats.

The allowed String formats are:


DateTime with milliseconds precision: _yyyyMMdd-HH:mm:ss.SSS_


DateTime with seconds precision: _yyyyMMdd-HH:mm:ss_


DateTime with minutes precision: _yyyyMMdd-HH:mm_


DateTime as Date: _yyyyMMdd_

### Date operations

#### dateIsBefore(date as DateTime|String|Long, String)
Returns true when the date in the given field is before the date specified

##### example:
`Expr.dateIsBefore(TRADE_DATE,'20150518')`

#### dateIsAfter(date as DateTime|String|Long, String)
Returns true when the date in the given field is after the date specified

##### example:
`Expr.dateIsAfter(TRADE_DATE,'20150518')`

#### dateIsGreaterEqual(date as DateTime|String|Long, String)

Returns true when the date in the given field is greater or equal to the date specified

##### example:

`Expr.dateIsGreaterEqual(TRADE_DATE,'20150518')`

#### dateIsLessEqual(date as DateTime|String|Long, String)

Returns true when the date in the given field is less or equal to the date specified

##### example:

`Expr.dateIsLessEqual(TRADE_DATE,'20150518')`

#### dateIsEqual(date as DateTime|String|Long, String)
Returns true when the date in the given field is equal to the date specified

#### example:
`Expr.dateIsEqual(TRADE_DATE,'20150518')`

#### dateIsToday(date as DateTime|String|Long)
Returns true when the data in the given field is equal to today's date (using system local time)

#### example:
`Expr.dateIsToday(TRADE_DATE)`

### DateTime operations

#### dateTimeIsBefore(datetime as DateTime|String|Long, String)

Returns true when the datetime in the given field is before the datetime specified

##### example:

`Expr.dateTimeIsBefore(TRADE_DATETIME,'20150518-10:50:24')`

#### dateTimeIsAfter(datetime as DateTime|String|Long, String)

Returns true when the datetime in the given field is after the datetime specified

##### example:

`Expr.dateTimeIsAfter(TRADE_DATETIME,'20150518-10:50:24')`

#### dateTimeIsGreaterEqual(datetime as DateTime|String|Long, String)

Returns true when the datetime in the given field is greater or equal to the datetime specified

##### example:


`Expr.dateTimeIsGreaterEqual(TRADE_DATETIME,'20150518-10:50:24')`

#### dateTimeIsLessEqual(datetime as DateTime|String|Long, String)


Returns true when the datetime in the given field is less or equal to the datetime specified

##### Example:


`Expr.dateTimeIsLessEqual(TRADE_DATETIME,'20150518-10:50:24')`