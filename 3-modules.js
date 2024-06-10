
const names = require('./4-names')
const sayhi = require('./5-util')
const data = require('./6-alternativeflavour')
require('./7-mindgrenade')
console.log(data)
console.log(names)

sayhi ('susan');
sayhi (names.john);
sayhi (names.peter);