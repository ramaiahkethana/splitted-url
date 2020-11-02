# splitted-url
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
