const qs = require('qs');

let obj = qs.parse('a=c');
console.log(obj);//{a:'c'}
console.log(qs.parse('foo[bar]=baz'));//{foo:{bar:'baz}}

console.log(qs.parse('a[b][c][d][e]=1'));//{a:{b:{c:{d:{e:1}}}}}
console.log(qs.parse('a[b][c][d][e]=2', {depth:1}));//{a:{b:{'[c][d][e]':2}}}

console.log(qs.parse('a=1&b=2',{parameterLimit:1}));//{a:1}
console.log(qs.parse('?a=1&b=2'),{ignoreQueryPrefix:true});//{a:1,b:2}

console.log(qs.parse('a=1;b=2,c=3',{delimiter:/[;,]/}));//{a:1,b:2,c:3}