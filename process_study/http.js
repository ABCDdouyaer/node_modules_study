const http = require('http');
const server = http.createServer(function(req,res){
    res.writeHead(200,{});
    res.end('response');
    badLoggingCall('sent response');
    console.log('sent response');
});
process.on('uncaughtException', function(e){
    console.log(e);
});
server.listen(8080,function(){
    console.log('server is running at 8080');
});
//[ReferenceError: badLoggingCall is not defined]