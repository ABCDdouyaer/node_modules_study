/**
 * 注意：勿用node低版本运行 >= v7.6.0
 * 
 */

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require('./middleware/controller.js');
const koaStatic = require('koa-static');
const router =  require('koa-router')();
const path = require('path');
const template =  require('./middleware/template.js');


console.log(path.join(__dirname,'static'))
app.use(koaStatic(path.join(__dirname,'static')));
app.use(template())
app.use(bodyParser());
app.use(controller());




app.listen(3000);
console.log('server is runing at port 3000......');