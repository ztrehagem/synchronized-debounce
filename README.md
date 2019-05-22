# @ztrehagem/synchronized-debounce

**synchronized-debounce** makes easy to define debounced functions with async functions.

It's simple to use:

```js
const synchronizedDebounce = require('@ztrehagem/synchronized-debounce')

const debounced = synchronizedDebounce(asyncFn, interval)

debounced() // just
debounced() // call
debounced() // anytime
debounced() // manytimes
```

Roughly the behavior is same to the _debounce_ function.
If the _debounce_ tries calling `asyncFn` while awaiting previous execution of `asyncFn`, the next calling is deferred until exiting the previous one.
