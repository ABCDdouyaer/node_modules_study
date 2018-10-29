var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}));
var i = 1;
app.get('/', function (req, res) {
  i++;
  console.log(i)
  console.log(req.query)
   res.send(req.query.echostr);
})
 
app.post('/', function (req, res) {
    var xml = '';
    req.on('data',(chunk)=>{
      xml += chunk;
    })
    req.on('end', ()=>{
      console.log(xml)
    })
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

var server = app.listen(80, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})