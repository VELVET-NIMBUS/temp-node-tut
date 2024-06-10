const path = require('path');

console.log(path.sep)

const filePath= path.join('/Asynchronous JS','subfolder','test.txt')
console.log(filePath)

const base =path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'/Asynchronous JS','/subfolder','/text.txt');
console.log(absolute)

