<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-forms](./foundation-forms.md) &gt; [Form](./foundation-forms.form.md)

## Form class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Foundation form component for automatically generated forms based on json schema obtained from the api, supplied initial data or supplied JSON schema. Allowing customisable form elements using UI schema and set of custom renderers

**Signature:**

```typescript
export declare class Form extends FoundationElement 
```
**Extends:** FoundationElement

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [data](./foundation-forms.form.data.md) |  | any | Initial data for the form |
|  [jsonSchema](./foundation-forms.form.jsonschema.md) |  | JSONSchema7 | Alternatively to providing [Form.resourceName](./foundation-forms.form.resourcename.md) you can hardcode the JSON schema on the client. |
|  [readonly](./foundation-forms.form.readonly.md) |  | boolean | **_(BETA)_** |
|  [renderers](./foundation-forms.form.renderers.md) |  | [RendererEntry](./foundation-forms.rendererentry.md)\[\] | Allows to provide set of renderers used by the form. If not provided it will default to text-field inputs |
|  [resourceName](./foundation-forms.form.resourcename.md) |  | string | Name of the backend resource which will provide metadata used to generate form and later used for submitting data |
|  [uischema](./foundation-forms.form.uischema.md) |  | UISchemaElement | UI schema used to define configuration of the layout and elements in the form Check [UiSchemaElement](./foundation-forms.uischemaelement.md) for possible options |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [disconnectedCallback()](./foundation-forms.form.disconnectedcallback.md) |  | **_(BETA)_** |
