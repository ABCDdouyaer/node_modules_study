const path = require('path');
const mime = require('mime');
const fs = require('fs');

function staticFiles(url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        console.log(`请求的url：${rpath}`);
        if (rpath.startsWith(url)) {
            let fp = path.join(dir, rpath.substring(url.length));
            console.log(fp)
                ctx.response.type = mime.getType(rpath);
                ctx.response.body = await fs_promsie(fp);
        } else {
            await next();
        }
    };
}

function fs_promsie(fp){
    return new Promise((resolve, reject) => {
      fs.readFile(fp,(err,data) => {
          if(err) throw err;
          console.log(data.toString())
          reject(data.toString())
      })



    })
}
module.exports = staticFiles;