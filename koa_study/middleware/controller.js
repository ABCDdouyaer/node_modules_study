const fs = require('fs');
const path = require('path');
let router = require('koa-router')();
function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router) {
    let controllerPath =  path.resolve(__dirname,'../controllers');
    let files = fs.readdirSync(controllerPath).filter((f) => {
        return f.endsWith('.js');
    })
  
    files.forEach((f) => {
        let mapping = require(controllerPath + path.sep + f);
        console.log(mapping)
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    addControllers(router);
    return router.routes();
};
