/*
* minimist包解析进程的启动命令
* */

var argv = require('minimist')(process.argv.slice(0));
console.dir(argv);
/**
 * { _:[node启动程序的位置，启动文件的位置]，参数的键值对 }
 * */