<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-forms](./foundation-forms.md) &gt; [Filters](./foundation-forms.filters.md) &gt; [uischema](./foundation-forms.filters.uischema.md)

## Filters.uischema property

UI schema used to define configuration of the layout and elements in the filters Check [UiSchemaElement](./foundation-forms.uischemaelement.md) for possible options

**Signature:**

```typescript
uischema: UISchemaElement;
```

## Remarks

If not provided will be autogenerated based on json schema or initial data

## Example

Here's a simple example:

```
const sampleUISchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/QUANTITY',
      label: 'Quantity',
    },
    {
      type: 'Control',
      scope: '#/properties/INSTRUMENT_ID',
      options: {
        allOptionsResourceName: 'INSTRUMENT',
        valueField: 'INSTRUMENT_ID',
        labelField: 'INSTRUMENT_ID',
      },
      label: 'Instrument',
    },
    {
      type: 'Control',
      scope: '#/properties/SIDE',
      label: 'Side',
    },
  ],
};
```
