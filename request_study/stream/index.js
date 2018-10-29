const request = require('request');
const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
   res.writeHead(200, {'Content-Type': 'text/javascript; charset=gbk'});
   if(req.url === 'about'){
       req.pipe(request.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=ba'));
   }
   if(req.url === '/1.jpg'){
       request.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=ba',(error, body, response)=>{     
          res.end(response)
       })
   }
});
server.listen(7070, ()=>{
    console.log('连接中...')
})