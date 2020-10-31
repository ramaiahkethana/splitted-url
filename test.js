const test = require('ava');
const splittedUrl = require('./index')

test('domains testing', t => {
  const case1Expected = {
    host: 'google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('google.com'), case1Expected)

  const case2Expected = {
    host: 'www.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('www.google.com'), case2Expected)

  const case3Expected = {
    host: 'test-admin.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('test-admin.google.com'), case3Expected)

  const case4Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('admin.cosole.google.com'), case4Expected)

  const case5Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('admin.cosole.google.com?param1=a'), case5Expected)

  const case6Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('admin.cosole.google.com/v1/users?param1=a'), case6Expected)
})

test('https domains testing', t => {
  const case1Expected = {
    host: 'google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('https://google.com'), case1Expected)

  const case2Expected = {
    host: 'www.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('https://www.google.com'), case2Expected)

  const case3Expected = {
    host: 'test-admin.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('https://test-admin.google.com'), case3Expected)

  const case4Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('https://admin.cosole.google.com'), case4Expected)

  const case5Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('https://admin.cosole.google.com?param1=a'), case5Expected)

  const case6Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('https://admin.cosole.google.com/v1/users?param1=a'), case6Expected)
})

test('http domains testing', t => {
  const case1Expected = {
    host: 'google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('http://google.com'), case1Expected)

  const case2Expected = {
    host: 'www.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('http://www.google.com'), case2Expected)

  const case3Expected = {
    host: 'test-admin.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('http://test-admin.google.com'), case3Expected)

  const case4Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('http://admin.cosole.google.com'), case4Expected)

  const case5Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('http://admin.cosole.google.com?param1=a'), case5Expected)

  const case6Expected = {
    host: 'admin.cosole.google.com',
    domain: 'google.com',
  }
  t.deepEqual(splittedUrl('http://admin.cosole.google.com/v1/users?param1=a'), case6Expected)
})
