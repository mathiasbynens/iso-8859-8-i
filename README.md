# iso-8859-8-i [![Build status](https://travis-ci.org/mathiasbynens/iso-8859-8-i.svg?branch=master)](https://travis-ci.org/mathiasbynens/iso-8859-8-i) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/iso-8859-8-i/badge.svg)](https://coveralls.io/r/mathiasbynens/iso-8859-8-i) [![Dependency status](https://gemnasium.com/mathiasbynens/iso-8859-8-i.svg)](https://gemnasium.com/mathiasbynens/iso-8859-8-i)

_iso-8859-8-i_ is a robust JavaScript implementation of [the iso-8859-8-i character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#iso-8859-8-i).

This encoding is known under the following names: csiso88598i, iso-8859-8-i, and logical.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install iso-8859-8-i
```

In a browser:

```html
<script src="iso-8859-8-i.js"></script>
```

In [Node.js](https://nodejs.org/), [io.js](https://iojs.org/), [Narwhal](http://narwhaljs.org/), and [RingoJS](http://ringojs.org/):

```js
var iso88598i = require('iso-8859-8-i');
```

In [Rhino](https://www.mozilla.org/rhino/):

```js
load('iso88598i.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'iso-8859-8-i': 'path/to/iso-8859-8-i'
    }
  },
  ['iso-8859-8-i'],
  function(iso88598i) {
    console.log(iso88598i);
  }
);
```

## API

### `iso88598i.version`

A string representing the semantic version number.

### `iso88598i.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `iso88598i.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to iso-8859-8-i. The return value is a ‘byte string’, i.e. a string of which each item represents an octet as per iso-8859-8-i.

```js
const encodedData = iso88598i.encode(text);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
const encodedData = iso88598i.encode(text, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in iso-8859-8-i,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `iso88598i.decode(input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to iso-8859-8-i.

```js
const text = iso88598i.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
const text = iso88598i.decode(encodedData, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the iso-8859-8-i encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

For decoding a buffer (e.g. from `fs.readFile`) use `buffer.toString('binary')` to get the byte string which `decode` takes.

## Support

_iso-8859-8-i_ is designed to work in at least Node.js v0.10.0, io.js v1.0.0, Narwhal 0.3.2, RingoJS 0.8-0.11, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, Edge, and Internet Explorer.

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_iso-8859-8-i_ is available under the [MIT](https://mths.be/mit) license.
