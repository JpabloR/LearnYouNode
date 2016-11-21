var fs = require('fs');
var path = require('path');

var paths = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(paths, function callback(error, data) {
    if (!error){
        //findExt(data);
        data.forEach(function(file){
            var extTemp = path.extname(file);
            if (extTemp === ext){
                console.log(file);
            }
        });
    }
});

function findExt(data){
    for (var index = 0; index < data.length; index++) {
        var element = data[index];
        
        
    }
}