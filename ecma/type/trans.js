// 显示类型转换
console.log(Number('123')); // 123
console.log(Number('true')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN
console.log(Number('a')); // NaN
console.log(Number('1a')); // NaN
console.log(Number('a1')); // NaN
console.log(Number('3.14')); // 3.14
console.log('-------------------');
console.log(parseInt('123')); // 1
console.log(parseInt('3.14')); // 3
// 将111看做16进制，并转成十进制
console.log(parseInt('111', 16)); // 273
// 默认当做十六进制
console.log(parseInt('0x111')); // 273
console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN
console.log(parseInt(null)); // NaN
console.log(parseInt(undefined)); // NaN
console.log(parseInt(NaN)); // NaN
console.log(parseInt('abc123')); // NaN
console.log(parseInt('123abc')); // 123
console.log('-------------------');
console.log(parseFloat('3.14abc')); // 3.14

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(1));

// 隐式类型转换
var a = '123'; // Number(a)
a++;
console.log(a); // 124

var b = 'a' + 1; // String('1')
console.log(b); // a1

var c = '3' * 2; // Number('3')
console.log(c); // 6

var d = 1 > '2'; // Number('2')
console.log(d); // false

// undefined、null既不大于0也不小于0还不等于0
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false
