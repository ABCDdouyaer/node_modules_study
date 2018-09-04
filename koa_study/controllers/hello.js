const env = require('nunjucks');
const path = require('path');
const rootPath = path.resolve(__dirname,'../');
console.log(`rootPath:${rootPath}`);
let fn_hello = async (ctx, next) => {
    console.log(123)
    var name = ctx.params.name || '默认';
    ctx.response.body = `<h1>hello, ${name}</h1>`;
};

let fn_main = async (ctx,next) => {
    
    ctx.render(rootPath + path.sep + 'view/index.html',{name:'ww'})
}
module.exports = {
    'GET /hello/:name': fn_hello,
    'GET /main': fn_main
}