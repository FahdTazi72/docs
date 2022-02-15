---
sidebar_position: 3
title: Subscribe Operations
sidebar_label: Subscribe
id: subscribe

---

Subscribe operations allows code to react to database changes, rather than polling for changes. Code can either 
just listen to changes, or combine use a combined read/subscribe operation. These mixed read/subscribe operations 
are useful 

Subscriptions are limited to a single table or view. 

## Types of changes

There are 3 categories of changes:
1. Insert - a new row is inserted
2. Delete - an existing row is deleted
3. Modify - an existing row is changed

Please note that when subscribing to a view and or a range, that the change will reflect the change to the subscription, 
rather than directly correlate to a database operation. A database insert or delete update will only be published to the 
subscriber if the insert appears in the range and or view. Similarly, a database modify update might not show at all or 
be transformed into an insert or delete update, if it moves into or out of the subscription.

### Backward Joins

By default, subscriptions on views will only publish updates on database changes to the root table. However, in view 
definitions, a join to a child table can be defined as `backwardsJoin = true`. For those joins, the subscription will 
also publish changes to child tables as modify updates. Please note that this is only supported for combined 
read/subscribe operations, as the subscription needs to cache the joins. Further, this cache will require extra memory 
and cpu cycles to maintain. 

## Subscribing to updates

When subscribing to updates, there are a number of different parameters:

| Name             | Required | Meaning                                         | Default Value        |
|------------------|----------|-------------------------------------------------|----------------------|
| Table name       | ✔️       | The table to subscribe to                       | n/a                  |
| fields           | ❌        | Only listen to changes on selected fields       | listen to all fields |
| delay            | ❌        | Group and publish updates every x ms            | no grouping          |
| subscribeLocally | ❌        | When in a cluster, only listen to local updates | false                |


## Mixed read/ subscribe operations

Mixed read and subscribe operations are useful in custom components when needed to read a whole or part of a table 
and needed to keep in the loop of changes. 

For this purpose the database exposes two types of operations:

1. `bulkSubscribe` - combines `subscribe` and `getBulk`
2. `rangeSubscribe` - combines `subscribe` and `getRange`

### `bulkSubscribe`

`bulkSubscribe` has the following parameters:

| Name             | Required | Meaning                                         | Default Value        |
|------------------|----------|-------------------------------------------------|----------------------|
| Table name       | ✔️       | The table to subscribe to                       | n/a                  |
| Index name       | ❌        | The index to sort the read by                   | primary key          |
| fields           | ❌        | Only listen to changes on selected fields       | listen to all fields |
| delay            | ❌        | Group and publish updates every x ms            | no grouping          |
| subscribeLocally | ❌        | When in a cluster, only listen to local updates | false                |
| backwardsJoin    | ❌        | subscribe to changes on child tables            | false                |

### `rangeSubscribe`

`rangeSubscribe` has the following parameters:

| Name             | Required | Meaning                                         | Default Value        |
|------------------|----------|-------------------------------------------------|----------------------|
| Table name       | ✔️       | The table to subscribe to                       | n/a                  |
| Start index      | ✔️       | The index entry to read from                    | primary key          |
| End index        | ❌        | The index entry to read to                      | primary key          |
| fields           | ❌        | Only listen to changes on selected fields       | listen to all fields |
| delay            | ❌        | Group and publish updates every x ms            | no grouping          |
| subscribeLocally | ❌        | When in a cluster, only listen to local updates | false                |
| backwardsJoin    | ❌        | subscribe to changes on child tables            | false                |