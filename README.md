# Alternating Case [![Build Status](https://travis-ci.org/haykam821/Alternating-Case.svg?branch=master)](https://travis-ci.org/haykam821/Alternating-Case)

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

Usage:

```javascript
altCase("hello"); // "HeLlO"
altcase("The quick, brown fox jumps over the lazy dog."); // "ThE QuIcK, bRoWn fOx jUmPs oVeR ThE LaZy dOg."
```

Have fun!
