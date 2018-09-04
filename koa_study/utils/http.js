const fs = require('fs');
const path = require('path');

const cmsPath = path.resolve(__dirname, '../cms');
class Http {
    readFileById(fileName){
       return new Promise((resolve, reject)=>{
           fs.read(cmsPath + path.sep + fileName, (err, data) => {
               if(err) throw err;
               resolve(data.toString());
           })
       })
    }
}

module.exports = new Http();