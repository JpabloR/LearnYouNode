var net = require('net');
var strftime = require('strftime');

var port =  process.argv[2];
var date = strftime('%F %T').substr(0,16);

var server = net.createServer(function (socket) {
    socket.write(date + '\n');
    socket.end();
});
server.listen(port);
