# kepler.gl v2.5.5

```
npm i
npm start
```

The point which value is 0.15 will be still visible on map when filter range is [0.1, 0.14]

See root cause of this issue: https://github.com/xx7y7xx/deck.gl-examples/tree/data-filter-extension-filter-fp64-issue

## References

* [Saving and Loading Maps with Schema Manager](https://docs.kepler.gl/docs/api-reference/advanced-usages/saving-loading-w-schema)