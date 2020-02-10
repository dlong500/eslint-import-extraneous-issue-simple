// import package listed in dependencies
// expected result: no eslint error
// actual result: no eslint error
const leftPad = require('left-pad')

// import package not listed in dependencies (installed as a nested dependency)
// expected result: 'lodash' should be listed in the project's dependencies
// actual result (w/ eslint-plugin-import v2.18.2): 'lodash' should be listed in the project's dependencies
// actual result (w/ eslint-plugin-import v2.20.1): no eslint error
const _ = require('lodash')

// import nonexistant package that is not resolvable - comment this import in order to actually do a test run of the code
// expected result: 'nonexistantPackage' is defined but never used -and- Unable to resolve path to module 'nonexistant-package'
// actual result: 'nonexistantPackage' is defined but never used -and- Unable to resolve path to module 'nonexistant-package'
const nonexistantPackage = require('nonexistant-package')

// import local function with relative path resolution
// expected result: no eslint error
// actual result: no eslint error
const util = require('../library/util')

console.log('leftPad test: ' + leftPad('foo', 6, '-'))
console.log('_.padStart test: ' + _.padStart(util.square(2), 3, '0'))