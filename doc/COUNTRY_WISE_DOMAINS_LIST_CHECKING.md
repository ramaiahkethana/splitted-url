## Extract country domains

Open console in browser and select the country level domains paragraph through html selector

Then execute below scripts one by one to extract domains list

```
newCountryDomains = Array.from($0.querySelectorAll('a')).map(el => el.innerHTML)
```

Then copy old domains from https://github.com/ramaiahkethana/splitted-url/blob/main/index.js -> **countryWiseSubDomainsList** variable
```
oldCountryDomains = 
```

Then execute below code to get differences
```
function setDiff (a = [], b = []) {
  return a.filter(el => !b.includes(el))
}

oldCountryDomains = oldCountryDomains.map(el => {
  if (!el.startsWith('.')) {
    return  '.' + el
  }
  return el
})

data = { addedList: setDiff(newCountryDomains, oldCountryDomains), removedList: setDiff(oldCountryDomains, newCountryDomains) }
```

check above added and removed list and make necessary changes in index.js file
