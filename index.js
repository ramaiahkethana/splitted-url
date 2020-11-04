// data taken from https://en.wikipedia.org/wiki/Country_code_top-level_domain
const countryWiseSubDomainsList = [
  'ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax',
  'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bm', 'bn', 'bo', 'br', 'bs', 'bt',
  'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr',
  'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'er',
  'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi',
  'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht',
  'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke',
  'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr',
  'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo',
  'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng',
  'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm',
  'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd',
  'se', 'sg', 'sh', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'su', 'sv', 'sx', 'sy',
  'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw',
  'tz', 'ua', 'ug', 'uk', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws',
  'ye', 'yt', 'za', 'zm', 'zw',
]

/**
 * Split the url and return domain and hostname
 * @param {*} url 
 */
function split (url) {
  const domainRe = /(https?:\/\/){0,1}((?:[\w\d-]+\.)+[\w\d]{2,})/i;

  const data = domainRe.exec(url)

  const splittedDomain = data[2].split('.')
  
  const splittedDomainLength = splittedDomain.length

  const lastDomainElement = splittedDomain[splittedDomainLength - 1]

  if (splittedDomainLength === 2 || (splittedDomainLength === 3 && isCountryCodeExistsInDomain(lastDomainElement))) {
    return {
      host: data[2],
      domain: data[2],
    }
  }

  if (isCountryCodeExistsInDomain(lastDomainElement)) {
    const domain = splittedDomain[splittedDomain.length - 3] + '.' + splittedDomain[splittedDomain.length - 2] + '.' + splittedDomain[splittedDomain.length - 1] // return only main domain address
    return {
      host: data[2],
      domain: domain,
    }
  }

  const domain = splittedDomain[splittedDomain.length - 2] + '.' + splittedDomain[splittedDomain.length - 1] // return only main domain address

  return {
    host: data[2],
    domain: domain,
  }
}

/**
 * Checking is country code existing in splitted domains
 * @param {*} domain 
 */
function isCountryCodeExistsInDomain (domain) {
  const data = countryWiseSubDomainsList.filter(el => el === domain)

  return data.length ? true : false
}

module.exports = split
