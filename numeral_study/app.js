const numeral = require('numeral');


/**
 * format转换格式
 */
let a = numeral(11000).format('0,000.0');
console.log(a);//11,000.0
let b = numeral(1000).format('0,000.0');
console.log(b);//1,000.0
let c = numeral(1111000).format('0,000.0');
console.log(c);//1,111,000.0
let g = numeral(1112600/10000).format('0.0');
console.log(g);//111.3

/**
 * add加法运算
 */
let d = numeral(1000).add(100);
console.log(d);//{ _input: 1000, _value: 1100 }
let e = numeral(0.001).add(0.0003);
console.log(e);//{ _input: 0.001, _value: 0.0013 }
let h = numeral(0.1).add(0.2);
console.log(h);//{ _input: 0.1, _value: 0.3 }

/**
 * difference减法运算
 */

 let f = numeral(1000).difference(12.1);
 console.log(f);//987.9