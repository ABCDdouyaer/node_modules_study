
/**
 * 官网文档url:http://momentjs.cn/docs/#/displaying/as-array/
 */


const moment = require('moment');

//转换时间起点
console.log(moment());
console.log(moment('1992-07-28'));
console.log(moment('1992-07-28 12:24:21'));
console.log(moment("1992-07-28 12:24:21").isValid());//判断该时间能否被转换

//指定时间单位顺序
console.log(moment("12-25-1995", "MM-DD-YYYY"));

console.log(moment("12/25/1995", "MM-DD-YYYY"));


//年
console.log(moment('1992-07-28').format('YYYY'));//1992
console.log(moment().format('YY'));//18
console.log(moment().format('Q'));//3 第三季度
console.log(moment('1992-02-28').format('Q'));//1 第三季度

//月
console.log(moment('1992-07-28').format('M'));//7
console.log(moment('1992-07-28').format('MM'));//07
console.log(moment('1992-07-28').format('MMM'));//Jul
console.log(moment('1992-07-28').format('MMMM'))//July

//日
console.log(moment('1992-07-04').format('D'));//4
console.log(moment('1992-07-04').format('DD'));//04
console.log(moment('1992-07-04').format('DDD'));//186 一年过去的天数
console.log(moment('1992-07-04').format('DDDD'));//186
console.log(moment('1992-07-04').format('Do'));//4th
console.log(moment().format('x'));//时间戳ms 1535611707293
console.log(moment().format('X'));//时间戳s 1535611707293


//周
console.log(moment('1949-10-01').format('gggg'));//1949
console.log(moment('1949-10-01').format('gg'));//49
console.log(moment('1949-10-01').format('ww'));//40 一年中的第几周
console.log(moment('1949-10-01').format('w'));//40
console.log(moment().format('e'));//一周的第几天 4
console.log(moment().format('ddd'));//Thu
console.log(moment().format('dddd'));//Thursday
//ISO
console.log(moment('1949-10-01').format('GGGG'));//1949
console.log(moment('1949-10-01').format('GG'));//49
console.log(moment('1949-10-01').format('WW'));//40 一年中的第几周
console.log(moment('1949-10-01').format('W'));//40
console.log(moment().format('E'));//一周的第几天 4


//时
console.log(moment('1949-10-01 18:12:12').format('HH')); //24小时制 18
console.log(moment('1949-10-01 18:12:12').format('H')); //24小时制 18

console.log(moment('1949-10-01 18:12:12').format('hh')); //12小时制 06
console.log(moment('1949-10-01 18:12:12').format('h')); //12小时制 6

console.log(moment('1949-10-01 18:12:12').format('a')); //pm
console.log(moment('1949-10-01 18:12:12').format('A')); //PM

//分
console.log(moment('1949-10-01 18:09:09').format('mm')); //09
console.log(moment('1949-10-01 18:09:09').format('m')); //9

//秒
console.log(moment('1949-10-01 18:09:09').format('ss')); //09
console.log(moment('1949-10-01 18:09:09').format('s')); //09
console.log(moment('1949-10-01 18:09:39').format('S')); //0
console.log(moment('1949-10-01 18:09:39').format('SS')); //00
console.log(moment('1949-10-01 18:09:39').format('SSS')); //000
console.log(moment('1949-10-01 18:09:39').format('SSSSS')); //0000

//add 增加

var a = moment('1949-10-01 11:21:10').add(7, 'days');
console.log(a.format('YYYY-MM-DD HH:mm:ss'));//1949-10-08 11:21:10

//toArray()
console.log(moment('1949-10-01 11:21:10').toArray());//[ 1949, 9, 8, 11, 21, 10, 0 ]

//toObject()
console.log(moment().toObject());
/**
 * 
 { years: 2018,
  months: 7,
  date: 30,
  hours: 15,
  minutes: 32,
  seconds: 57,
  milliseconds: 118 }
 */


 //isBefore() 判断时间是否过去
 console.log(moment().isBefore('2018-09-01'))//true
 console.log(moment().isBefore('2018-05-01'))//false