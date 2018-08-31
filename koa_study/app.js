/**
 * 注意：勿用node低版本运行 >= v7.6.0
 * 
 */

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const staticFiles = require('./static_files.js');
const controller = require('./middleware/controller.js');
const koaStatic = require('koa-static');


app.use(koaStatic(__dirname + '/static'));
app.use(bodyParser());
app.use(controller());




app.listen(3000);
console.log('server is runing at port 3000......');