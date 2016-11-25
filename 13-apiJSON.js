var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req,res) {
    if (req.method === 'GET'){
        var link = req.url;
        var parseLink = url.parse(link);
        var json;
        if( parseLink.pathname === '/api/parsetime'){
            json = parseTime(parseLink.search.substr(5,parseLink.search.length)) 
        }
        if( parseLink.pathname === '/api/unixtime'){
            var unixT = unixtime(parseLink.search.substr(5,parseLink.search.length));
            json =JSON.stringify(unixT);
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(json);
    }
});
server.listen(port);

function parseTime (date){
    var newDate = new Date(date);
    var dateObject = new Object();
    dateObject.hour = newDate.getHours();
    dateObject.minute = newDate.getUTCMinutes();
    dateObject.second = newDate.getUTCSeconds();
    var res = new Array();
    res[0] = "hour";
    res[1] = "minute";
    res[2] = "second";
    var json = JSON.stringify(dateObject,res,"\n");
    return json;
}

function unixtime (date){
    var newDate = new Date(date);
    return { unixtime:newDate.getTime() }
}