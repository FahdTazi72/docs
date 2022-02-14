---
title: 'Request servers'
sidebar_label: 'Request servers'
sidebar_position: 10
id: configure
---

Request servers, (otherwise known as request/replies or reqreps) retrieve snapshot data from a table or a view. They then make the data available to the UI.
Within a request server file, there are one  more `requestReply` code blocks. Each code block defines a set of data that can be requested by the Web UI, and the set of data that is returned. The most [basic `requestReply`code block](/creating-applications/defining-your-application/user-interface/request-servers/reference/#basic-definition) simply specifies a table that can be reqested and returned.

By default, a request server file is generated automatically when you use AppGen. This uses the metadata of each view or table in the data model to create an individual `requestReply` code block for each one. The request will be the primary key, and the response provides every field in the table or view.

However, you can build your request server file manually (or edit the ones that were generated automatically).
That means you can specify both the request fields and the response fields as part of the requestReply codeblock. Request fields can include wildcards, so you could request all RIC Codes for example, or all RIC Codes beginning with V.

The `requestReply` code blocks in these [custom request servers](/creating-applications/defining-your-application/user-interface/request-servers/custom/) can be as simple or complex as your requirements. They are useful, for example, if you want to request data from a number of different tables and views that are not related. By nesting and joining all the relevant data in your `requestReply` statement, you create your own metadata for the request server, so it can then be used anywhere in the module.

### Configure in processes.xml

Request-Reply service configuration is added in processes.xml like below example, for more information of each tag in below config follow this [link](/creating-applications/configure-runtime/processes-xml)

```xml
<process name="TRADING_APP_REQUEST_SERVER">
  <groupId>TRADING_APP</groupId>
  <start>true</start>
  <options>-Xmx256m</options>
  <module>genesis-pal-requestserver</module>
  <package>global.genesis.requestreply.pal</package>
  <script>trading_app-reqrep.kts</script>
  <description>Server one-shot requests for details</description>
  <language>pal</language>
</process>
```