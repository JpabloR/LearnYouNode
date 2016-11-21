var fs = require('fs');
var path = require('path');

module.exports = function (paths, ext, callbck){
    var ext = '.' + ext;
    fs.readdir(paths, function (error, data) {
        if(error){
            return callbck(error);
        } else if (!error){
            var list = [];
            data.forEach(function(file){
                var extTemp = path.extname(file);
                if (extTemp === ext){
                    list.push(file);
                }
            });
            return callbck(null, list);
        }
    });
}