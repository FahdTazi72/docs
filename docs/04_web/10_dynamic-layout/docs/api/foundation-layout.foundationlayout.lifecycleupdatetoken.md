<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-layout](./foundation-layout.md) &gt; [FoundationLayout](./foundation-layout.foundationlayout.md) &gt; [lifecycleUpdateToken](./foundation-layout.foundationlayout.lifecycleupdatetoken.md)

## FoundationLayout.lifecycleUpdateToken property

Used to calculate whether a layout item should run its lifecycle methods or not

**Signature:**

```typescript
lifecycleUpdateToken: string | undefined;
```

## Remarks

When using the `LifecycleMixin`, the mixin can be used to gate lifecycle methods from running when other items have been added or deleted. This key is updated every time one of these actions are performed, so you can check if the key has changed and know you potentially need to gate some of your lifecycle functionality.
