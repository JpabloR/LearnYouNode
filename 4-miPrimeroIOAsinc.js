var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function callback(error, data){
    if (!error){
        var str = data.toString();
        var substr = str.split('\n');
        console.log(substr.length-1);
    }
});

