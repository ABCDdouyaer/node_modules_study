const path=require('path');

//basename('绝对路径','截取的后缀') 返回文件的扩展名
let a=path.basename('C:\\temp\\myfile.html');
console.log('basename返回：'+a);//myfile.html
let b=path.basename('C:\\temp\\myfile.html','.html');
console.log('basename返回：'+b);//myfile

//dirname('文件夹路径')返回文件夹路径
let c=path.dirname('/foo/bar/baz/asdf/quux/index.html');
console.log('dirname返回：'+c);// 返回: '/foo/bar/baz/asdf'

//extname('文件路径')返回文件的扩展名
let d=path.extname('/foo/bar/baz/asdf/quux/index.html');
console.log('extname返回：'+d)//.html

//format({})返回对象拼成的字符串路径
//对象属性 dir ext root base name
//如果dir存在 root被忽略
//如果base存在 ext 和 name被忽略
let e=path.format({
root:'c:/myfile',
name:'/文件夹',
ext:'.html'
});
console.log('format()返回：'+e) //format()返回：c:/myfile/文件夹.html

//isabsolute('路径')判断一个路径是否是绝对路径 返回bool
let f1=path.isAbsolute('./src/index.js');//false
let f2=path.isAbsolute('/src/index.js');//true
console.log(f1,f2);

//join(字符串片段)//返回字符串片段拼接成的路径
let g1=path.join('A','B','C','D');
console.log(g1);// A\B\C\D
let g2=path.join('A','B','C','D','./');
console.log(g2);// A\B\C\D\
let g3=path.join('A','B','C','D','../../');
console.log(g3);// A\B\

//normalize('路径')用于规范化给定的路径
let h1=path.normalize('');//返回.
console.log(h1);
let h2=path.normalize('C:\\temp\\\\foo\\bar\\..\\');
console.log(h2);// C:\temp\foo\

//pare('路径')解析路径 与format()相反 ************重要
let i=path.parse('c:/myfile/文件夹.html');
console.log(i);
/**
* { root: 'c:/',
dir: 'c:/myfile',
base: '文件夹.html',
ext: '.html',
name: '文件夹' }
*/


//relative(a,b)返回a对于b的相对路径 *************重要
let j=path.relative('C:/myfile/文件夹/1.html','C:/myfile/文件夹1/2.html');
console.log(j);// ..\..\文件夹1\2.html


//resolve()将字符串片段拼接成一个绝对文件 ************重要
let k1=path.resolve('my1','my2');
console.log(k1)//C:\Users\adimn\Desktop\es6\my1\my2
let k2=path.resolve();
console.log(k2);//C:\Users\adimn\Desktop\es6
let k3=path.resolve('A/B','../C/D');
console.log(k3);// C:\Users\adimn\Desktop\es6\A\C\D
let k4=path.resolve('/A/C');
console.log(k4);// C:\A\C


//sep提供路径分隔符
let l1='A\\B\\C\\D'.split(path.sep); //window下必须这样写 双反斜杠
console.log(l1); //[ 'A', 'B', 'C', 'D' ]