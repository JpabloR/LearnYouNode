var http = require('http');
var bl = require('bl');
var list = [];
var cont = 0;

for (var index = 0; index < 3; index++) {
    httpGet(process.argv[2+index],index);
}

function httpGet(dir,index){
    http.get(dir, function(response){
        response.pipe(bl(function(err, data){
            if(!err){
                list[index] = data.toString();
                cont++;
                if (cont === 3){
                    print();
                }
            };           
        }));
        response.on("error", console.error);
    });
}

function print(){
    list.forEach(function(element) {
        console.log(element);
    });
}