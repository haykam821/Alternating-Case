# Alternating Case

[![GitHub release](https://img.shields.io/github/release/haykam821/Alternating-Case.svg?style=popout&label=github)](https://github.com/haykam821/Alternating-Case/releases/latest)
[![npm](https://img.shields.io/npm/v/alternating-case.svg?style=popout&colorB=red)](https://www.npmjs.com/package/alternating-case)
[![Travis (.org)](https://img.shields.io/travis/haykam821/Alternating-Case.svg?style=popout)](https://travis-ci.org/haykam821/Alternating-Case)

This is a simple Node.js package that allows you to create strings that alternate in case.

## Installation

To start using this package, simply install from NPM:

```bash
npm install alternating-case --save
```

Afterwards, just require it and you can start using it:

```js
const altCase = require("alternating-case");
```

## Documentation

This package exports a function, used like so;

```
altCase(input, capsOnOdds);
```

`input` is the string you are trying to manipulate.

While by default capital letters will be on odd characters, you can make it capitalize even characters instead by changing `capsOnOdds` to false.

## Examples

```javascript
altCase("hello"); // "HeLlO"

altCase("should we capitalize odd characters?"); // "ShOuLd wE CaPiTaLiZe oDd cHaRaCtErS?"
altCase("should we capitalize odd characters?", true); // "ShOuLd wE CaPiTaLiZe oDd cHaRaCtErS?"
altCase("should we capitalize odd characters?", false); // "sHoUlD We cApItAlIzE OdD ChArAcTeRs?"

altCase("The quick, brown fox jumps over the lazy dog."); // "ThE QuIcK, bRoWn fOx jUmPs oVeR ThE LaZy dOg."

altCase("Native methods ensure áccents are preserved."); // "NaTiVe mEtHoDs eNsUrE ÁcCeNtS ArE PrEsErVeD."
```

Have fun!
