var http = require('http');
var bl = require('bl');

var dir = process.argv[2];

http.get(dir, function(response){
    response.setEncoding('utf8');
    response.on("data", function(data){
        console.log(data);
    });
    response.on("error", console.error);
})
