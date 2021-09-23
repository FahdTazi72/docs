---
id: static-events
title: Cron jobs (static events)
sidebar_label: Cron jobs (static events)
sidebar_position: 1

---
In this exercise you are going to create a cron rule that will trigger a batch job that will run once each day..

The batch job will generate a position csv for each counterparty and store it in **runtime/position-daily-report**. The file name will have the form COUNTERPARTY_ID-DATE.csv

Our rule takes the following form:

| CRON_EXPRESSION | DESCRIPTION | TIME_ZONE | RULE_STATUS | NAME | USER_NAME | PROCESS_NAME | MESSAGE_TYPE | RESULT_EXPRESSION |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 45 7 ? * MON,TUE,WED,THU,FRI * | It’s a rule | Europe/London | ENABLED | A rule | JohnDoe | TRADING_APP_EVENTHANDLER | EVENT_POSITION_REPORT |  |

## 1. Configure the Evaluator 

Make a copy of **genesis-processes.xml** and place it in **site-specific/cfg**. There should be an example there of GENESIS_EVALUATOR we can enable.

Run **genesisInstall** to verify that it works as expected.

Run **mon** to see the process:

## 2. Create an event handler

Create an event handler that will write the csv files to the runtime/position-daily-report folder. Ccall it EVENT_POSITION_REPORT.

Create message class and deploy jar

## 3. Update the process.xml file for the event handler

Add jar to event handler process xml

## 4. Create the csv writer

This event handler can call a csv writer. We need to create the csv writer as well; Create static function that will take a rxDb, and write the csv files to the runtime/position-daily-report. We can write csv file like this: