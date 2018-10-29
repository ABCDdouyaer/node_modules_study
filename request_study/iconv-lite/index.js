const iconv = require('iconv-lite');
const http = require('http');
const fs = require('fs');
const request = require('request');
//iconv.encodingExists() 检查是否支持编码
// console.log(iconv.encodingExists('utf-8'))


//支持流模式编码和解码
// http.createServer(function(req, res) {
//     var converterStream = iconv.decodeStream('win1251');
//     req.pipe(converterStream);

//     converterStream.on('data', function(str) {
//         console.log(str); // Do something with decoded strings, chunk-by-chunk.
//     });
//     res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'})
//     res.end('完事');

// }).listen('7070',()=>{
//     console.log('连接中...')
// })


// fs.createReadStream('./1.txt')
//     .pipe(iconv.decodeStream('utf-8'))
//     .pipe(iconv.encodeStream('win1251'))
//     .pipe(fs.createWriteStream('win1251.txt'));

// fs.createReadStream('./win1251.txt')
//     .pipe(iconv.decodeStream('win1251'))
//     .pipe(iconv.encodeStream('utf-8'))
//     .pipe(fs.createWriteStream('utf-8.txt'));



// request.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=ba').pipe(iconv.decodeStream('gbk')).pipe(fs.createWriteStream('./test.txt'))

// let rs = fs.createReadStream('./m.txt', {hightWaterMark: 11});
// let str = '';
// rs.on('data',(chunk)=>{
//     console.log(chunk.toString())
//     str += chunk;
// });
// rs.on('end',()=>{
//     console.log(str);
// })
