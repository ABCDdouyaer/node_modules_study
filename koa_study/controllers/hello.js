let fn_hello = async (ctx, next) => {
    var name = ctx.params.name || '默认';
    ctx.response.body = `<h1>hello, ${name}</h1>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
}