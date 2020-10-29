/**
 * Split the url and return domain and hostname
 * @param {*} url 
 */
function split (url) {
  const domainRe = /(https?:\/\/){0,1}((?:[\w\d-]+\.)+[\w\d]{2,})/i;

  const data = domainRe.exec(url)

  const splittedDomain = data[2].split('.')

  if (splittedDomain.length === 2) {
    return {
      host: data[2],
      domain: data[2],
    }
  }

  const domain = splittedDomain[splittedDomain.length - 2] + '.' + splittedDomain[splittedDomain.length - 1] // return only main domain address

  return {
    host: data[2],
    domain: domain,
  }
}

module.exports = {
  split,
}