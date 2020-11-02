# splitted-url

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

splittedUrl('https://google.co.in') // { host: 'google.co.in', domain: 'google.co.in' }

splittedUrl('https://www.google.com') // { host: 'www.google.com', domain: 'google.com' }

splittedUrl('https://www.google.co.in') // { host: 'www.google.co.in', domain: 'google.co.in' }
```
