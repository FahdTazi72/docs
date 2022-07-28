---
title: 'FAQs'
sidebar_label: 'FAQs'
id: faqs
---

Frequently Asked Questions
==========================

My write operations are not hitting the database[​](database/database-technology/faqs/#my-write-operations-are-not-hitting-the-databasedirect-link-to-heading)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

When using the [RxJava](/database/types-of-api/rxjava/) api, it is paramount that you end the call chain with a `subscribe...` call. The underlying database operation will not commence until it is subscribed to.