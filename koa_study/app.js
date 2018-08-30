/**
 * 注意：勿用node低版本运行 >= v7.6.0
 * 
 */

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');



function addMapping(router, mapping){
    
}




function addControllers(router){
    let files = fs.readdirSync(__dirname + '/controllers');
    let js_files = files.filter((f) => {
        return f.endsWith('.js')
    })

    for(var f of js_files) {
        console.log(`process controller: ${f}`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}



app.use(async (ctx, next) => {
    console.log(`url:${ctx.request.url},method:${ctx.request.method}`);
    await next();
});

router.get('/hello/:name',async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello, ${name}</h1>`;
})

router.get('/', async(ctx, next) => {
    ctx.response.body = 
    `<h1>主页</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>  
    `;
})

router.post('/signin', async(ctx, next) => {
    let name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';

    console.log(`账户名：${name},密码：${password}`);
    if(name == 'koa2' && password == '123'){
        ctx.response.body = `hello, ${name}`;
    }else{
        ctx.response.body = `<h3>Login failed!</h3><a href='/'>可以试着重新登录</a>`;
    }

})
app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
console.log('server is runing at port 3000......');