# alphastring

A minimal alphabetical semi-unique id generator. Best for random string generation in scenarios where strict uniqueness is not imperative.

This package should be used in non critical code, it is for convenience.

Not cryptographically sound!
Not unique, only pseudo random!


```js
let auid = require('alphastring');

console.log(auid()); // kfbxtyurktqm
console.log(auid(6)); // hkqqlw
console.log(auid(40)); // tmqxwarcpfxnffzgacgehbgvaemfsnviwpffldkx
```

```js
function createClass() {
    let componentName = alphastring();
    let propertyName = alphastring();

    let functionString = `return function ${componentName}(){this.${propertyName} = 'foo'; this.propertyName = '${propertyName}';}`;

    return Function(functionString)();
}
```

## Usage

[![NPM](https://nodei.co/npm/alphastring.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alphastring/)

### default `alphastring();`

Returns an alphabetical string of 12 characters.

### length `alphastring(length);`

Returns an alphabetical string of desired length.

## License

MIT, see [LICENSE.md](http://github.com/limeandcoconut/alphastring/blob/master/LICENSE.md) for details.
