const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./Asynchronous JS/first.txt','utf8');
const second = readFileSync('./Asynchronous JS/second.txt','utf8');

console.log(first,second);
writeFileSync(
    './Asynchronous JS/result.txt',`The power of the sun in the palm of my hand:
    ${first} , ${second}`,{flag:'a'})