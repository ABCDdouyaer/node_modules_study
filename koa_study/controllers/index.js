let fn_index =  async(ctx, next) => {
    ctx.response.body = 
    `<h1>主页</h1>
    <form action="/sigin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>  
    `;
};

let fn_sigin = async(ctx, next) => {
    let name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
    console.log(`账户名：${name},密码：${password}`);

    if(name == 'koa2' && password == '123'){
        ctx.response.body = `hello, ${name}`;
    }else{
        ctx.response.body = `<h3>Login failed!</h3><a href='/'>可以试着重新登录</a>`;
    }

};


module.exports = {
    'GET /':fn_index,
    'POST /sigin':fn_sigin
}