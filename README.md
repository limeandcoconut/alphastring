# alphastring

A minimal alphabetical semi-unique id generator. Best for random string generation in scenarios where strict uniqueness is not imperative.

This package should be used in non critical code, it is for convenience.

Not cryptographically sound!
Not unique, only pseudo random!


```js
let auid = require('alphastring');

console.log(auid()); //
console.log(auid(6)); //
console.log(auid(40)); //
```

## Usage

### default `alphastring();`

Returns an alphabetical string of 12 characters.

### length `alphastring(length);`

Returns an alphabetical string of desired length.

## License

MIT, see [LICENSE.md](http://github.com/limeandcoconut/alphastring/blob/master/LICENSE.md) for details.
