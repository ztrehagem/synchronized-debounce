# @ztrehagem/synchronized-debounce

**synchronized-debounce** makes easy to define debounced functions with async functions.

It's simple to use:

```js
const synchronizedDebuonce = require('@ztrehagem/synchronized-debuonce')

const debounced = synchronizedDebuonce(asyncFn, interval)

debounced() // just
debounced() // call
debounced() // anytime
debounced() // manytimes
```

Roughly the behavior is same to _debounce_ module.
If _debounce_ tries calling `asyncFn` while executing previous execution of `asyncFn`, the next time execution of `asyncFn` is deferred until exiting previous one.
