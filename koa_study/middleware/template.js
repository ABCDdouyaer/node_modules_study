const nunjucks = require('nunjucks');


function templating() { 
    return async (ctx, next) => {
        let time = new Date();
        ctx.render = function (view, model) {
            ctx.response.body = nunjucks.render(view, Object.assign({}, ctx.state || {}, model || {}));
            ctx.response.type = 'text/html';
        };
        await next();
        console.log(new Date() - time)
    };
}

module.exports = templating;