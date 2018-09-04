process.on('exit',function(){
    setTimeout(function(){
        console.log('this will not run');
    },500);
    console.log('Bye');
});
//因为进程退出之后将不再执行事件循环，所有只有那些没有回调函数的代码才会被执行

process.on('uncaughtException',function(err){
    console.log('Caught exception:' + err);
});
setTimeout(function(){
    console.log('This will still run');
}, 500);

nonexistentFunc();
console.log('this will not run.');
/**
 * Caught exception:ReferenceError: nonexistentFunc is not defined
 * This will still run
 * Bye
 * */