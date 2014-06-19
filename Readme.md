# gemoji [![Build Status](https://travis-ci.org/wooorm/gemoji.svg?branch=master)](https://travis-ci.org/wooorm/gemoji) [![Coverage Status](https://img.shields.io/coveralls/wooorm/gemoji.svg)](https://coveralls.io/r/wooorm/gemoji?branch=master)

See [Browser Support](#browser-support) for more information (a.k.a. don’t worry about those grey icons above).

---

Named and unicode Gemoji.

## Installation

NPM:
```sh
$ npm install gemoji
```

Component.js:
```sh
$ component install wooorm/gemoji
```

## Usage

```js
var gemoji = require('gemoji');

gemoji.name["cat"]; // "🐱"
gemoji.unicode["🐶"]; // "dog"
gemoji.unicode["\uD83D\uDCA9"]; // "poop"
```

## Browser Support
Pretty much every browser (available through browserstack) runs all gemoji unit tests.

## License

  MIT
