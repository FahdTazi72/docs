<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-forms](./foundation-forms.md) &gt; [Filters](./foundation-forms.filters.md)

## Filters class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Foundation filters component for automatically generated filters based on json schema obtained from the api, supplied initial data or supplied JSON schema. Allowing customisable filters elements using UI schema and set of custom renderers

**Signature:**

```typescript
export declare class Filters extends FoundationElement 
```
**Extends:** FoundationElement

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [data](./foundation-forms.filters.data.md) |  | any | Initial data for the filters |
|  [jsonSchema](./foundation-forms.filters.jsonschema.md) |  | JSONSchema7 | Alternatively to providing [Form.resourceName](./foundation-forms.form.resourcename.md) you can hardcode the JSON schema on the client. |
|  [renderers](./foundation-forms.filters.renderers.md) |  | [RendererEntry](./foundation-forms.rendererentry.md)\[\] | Allows to provide set of renderers used by the filters. If not provided it will default to text-field inputs |
|  [resourceName](./foundation-forms.filters.resourcename.md) |  | string | Name of the backend resource which will provide metadata used to generate filters |
|  [uischema](./foundation-forms.filters.uischema.md) |  | UISchemaElement | UI schema used to define configuration of the layout and elements in the filters Check [UiSchemaElement](./foundation-forms.uischemaelement.md) for possible options |
|  [value](./foundation-forms.filters.value.md) |  | string | Created criteria based on the given data that can be used to filter the data |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [clearFiltersData()](./foundation-forms.filters.clearfiltersdata.md) |  | **_(BETA)_** |
|  [disconnectedCallback()](./foundation-forms.filters.disconnectedcallback.md) |  | **_(BETA)_** |
|  [valueChanged()](./foundation-forms.filters.valuechanged.md) |  | **_(BETA)_** |
