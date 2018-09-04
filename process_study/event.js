// process.on('beforeExit',function(e){
//     console.log(e);
//     console.log('事件循环数组为空，并且没有额外的工作被添加进来，会触发');
//     setTimeout(function(){
//         console.log('回调中含有异步操作，进程继续');
//     },1000)
// });


// process.on('disconnect',function(){
//     console.log('Node.js 进程是由 IPC 通道的方式创建的（详见子进程和集群文档），当 IPC 通道关闭时，会触发disconnect事件');
// });

// var code = 500;
// process.on('exit',(code)=>{
//     console.log(`即将退出，退出码为${code}`);
//     console.log('该回调只允许同步操作，所有异步操作排队的工作全被强制丢掉');
//     setTimeout(function(){
//         console.log('该内容不会被执行');
//     },1000);
// });
// setTimeout(()=>{
//     process.exit();
// },2000);

//message事件：如果 Node.js 进程是由 IPC 通道的方式创建的（详见子进程和集群文档），当子进程收到父进程发送的消息时(消息通过 childprocess.send() 发送），会触发 'message' 事件

// process.on('uncaughtException',(err)=>{
//     require('fs').writeFileSync('1.txt',`捕获到异常：${err}\n`);
// });
// setTimeout(()=>{
//     console.log('这里仍然会运行');
// }, 500);
//
// noneFun();
// console.log('这里不会运行');


// process.on('warning', (warning) => {
//     console.warn(warning.name);    // 打印告警名称
//     console.warn(warning.message); // 打印告警信息
//     console.warn(warning.stack);   // 打印堆栈信息
// });
//
// console.log(process.arch);
// process.abort();

// console.log(`Starting directory: ${process.cwd()}`);
// try {
//     process.chdir('/tmp');
//     console.log(`New directory: ${process.cwd()}`);
// } catch (err) {
//     console.error(`chdir: ${err}`);
// }
//
// console.log(process.config);
//
// console.log(process.cwd());
//
// console.log(process.debugPort);
//
// console.log(process.env);
// require('fs').writeFileSync('2.js',JSON.stringify(process.env));

console.log(process.pid);
console.log(process.mainModule);