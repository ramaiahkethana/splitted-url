# splitted-url

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Coverage Status](https://coveralls.io/repos/github/christyram99/splitted-url/badge.svg?branch=main)](https://coveralls.io/github/christyram99/splitted-url?branch=main)

It will use to identify main domain and hostname from a url

## Installing
```js
npm i splitted-url --save
```

### Usage 
```js
const spllitedUrl = require('splitted-url')

splittedUrl('https://google.com') // { host: 'google.com', domain: 'google.com' }

splittedUrl('https://www.google.com') // { host: 'www.google.com', domain: 'google.com' }
```
[npm-image]: https://img.shields.io/npm/v/splitted-url.svg
[npm-url]: https://npmjs.org/package/splitted-url
[downloads-image]: https://img.shields.io/npm/dm/splitted-url.svg
[downloads-url]: https://npmjs.org/package/splitted-url