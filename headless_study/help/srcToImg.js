const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const chalk = require('chalk');
const writeFile = promisify(fs.writeFile);
const regMap = require('./regMap');

const urlToImg = promisify((url, dir) => {
    let mod;
    if(regMap.isHttp.test(url)){
        mod = http;
    }else if(regMap.isHttps.test(url)){
        mod = https;
    }
    //获取图片的扩展名
    const ext = path.extname(url);
    //拼接图片存储的路径和扩展名
    const file = path.join(dir, `${parseInt(Math.random() * 1000000)}${ext}`);

    mod.get(url, res => {
        //采用stream的形式，比直接写入更快捷
        res.pipe(fs.createWriteStream(file)).on('finish', () => {
            console.log(file);
        });
    });
});

const base64ToImg = async (base64Str, dir) => {
    const matchs = base64Str.match(regMap.isBase64);
    try {
        const ext = matchs[1].split('/')[1].replace('jpeg', 'jpg');
        const file = path.join(dir, `${parseInt(Math.random() * 1000000)}.${ext}`);

        await writeFile(file, matchs[2], 'base64');
        console.log(file);
    } catch (error) {
        console.log(chalk.red('无法识别的图片'));
    }
};

module.exports = (src, dir) => {
    if(regMap.isPic.test(src)){
        urlToImg(src, dir);
    }else{
        base64ToImg(src, dir);
    }
};
