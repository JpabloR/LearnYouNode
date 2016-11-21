var fs = require('fs');

var path = process.argv[2];

var buff = fs.readFileSync(path);
var str = buff.toString();
var cont = 0;
var substr = str.split('\n');

console.log(substr.length-1);
