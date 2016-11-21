var moduleEx = require('./6-moduleEx.js');
var path = process.argv[2];
var ext = process.argv[3];

moduleEx(path,ext, function (err, files){
    if (!err){
        files.forEach(function(file){
            console.log(file);
        });
    }
    else{
        console.log('Error: ', err);
    }
});

