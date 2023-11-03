<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-comms](./foundation-comms.md) &gt; [Datasource](./foundation-comms.datasource.md) &gt; [getMetadata](./foundation-comms.datasource.getmetadata.md)

## Datasource.getMetadata() method

Fetches metadata for the specified resource name.

**Signature:**

```typescript
getMetadata?(resourceName: string): Promise<Array<FieldMetadata>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  resourceName | string | The name of the resource to fetch metadata for. |

**Returns:**

Promise&lt;Array&lt;[FieldMetadata](./foundation-comms.fieldmetadata.md)&gt;&gt;

A promise that resolves with an array of FieldMetadata.
