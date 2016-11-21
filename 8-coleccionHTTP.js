var http = require('http');
var bl = require('bl');

var dir = process.argv[2];

http.get(dir, function(response){
    //response.setEncoding('utf8');
    response.pipe(bl(function(err, data){
        if(!err){
            console.log(data.length);
            console.log(data.toString());
        };           
    }));

    response.on("error", console.error);
})
