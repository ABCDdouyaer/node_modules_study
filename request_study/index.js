const request = require('request');
const fs = require('fs');

//基本用法
// request('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=ba', (error, response, body)=>{
//     console.log(body)
// })


//流模式
// request('http://n.sinaimg.cn/translate/20170819/HjeT-fykcypq0347709.jpg').pipe(fs.createWriteStream('1.jpg'));


request
  .get('http://n.sinaimg.cn/translate/20170819/HjeT-fykcypq0347709.jpg')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'))