// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var i = 0;
// for (; i < 10; ) {
//   console.log(i);
//   i++;
// }

// var i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var i = 1;

// for (; i; ) {
//   console.log(i);
//   i++;

//   if (i == 11) {
//     // i = 0;
//     break;
//   }
// }

// var sum = 0;
// for (var i = 0; i < 100; i++) {
//   sum += i;
//   if (sum >= 100) {
//     break;
//   }
// }
// console.log(sum);

// for (var i = 0; i <= 100; i++) {
//   if (i % 7 === 0 || i % 10 === 7) {
//     continue;
//   }
//   console.log(i);
// }

// 打印0~100的数
// ()只能有一句, 不能写比较
// {}不能出现i++,i--
// var i = 101;
// for (; i--; ) {
//   console.log(i);
// }

// 10的N次方
// var n = 5;
// var num = 1;
// for (var i = 0; i < n; i++) {
//   num *= 10;
// }
// console.log(num);

// n的阶乘
// var n = 5;
// var num = 1;
// for (var i = 1; i <= 5; i++) {
//   num *= i;
// }
// console.log(num);

// var a = 1,
//   b = 2,
//   c = 3;
// console.log(Math.max(a, b, c));

// 质数 仅能被1和自己整除的数

// var count = 0;
// for (var i = 2; i < 100; i++) {
//   for (var j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }

//   if (count === 2) {
//     console.log(i);
//   }

//   count = 0;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr[0]);
// console.log(arr.length);

// var obj = {
//   name: 'js', // 属性名: 属性值
//   age: 12,
// };

// obj.name = 'css';

// console.log(obj);

// console.log(typeof 123); // number
// console.log(typeof 'hello'); // string
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof function () {}); // function
// console.log(typeof null); // object
// console.log(typeof []); // object
// console.log(typeof {}); // object
// console.log(typeof new Date()); // object
// console.log(typeof typeof a); // string

// console.log(Number('123')); // 123
// console.log(Number('true')); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(NaN)); // NaN
// console.log(Number('a')); // NaN
// console.log(Number('1a')); // NaN
// console.log(Number('a1')); // NaN
// console.log(Number('3.14')); // 3.14

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2])); // NaN

// 将111看做16进制，并转成十进制
// console.log(parseInt('111', 16)); // 273
// 默认当做十六进制
// console.log(parseInt('0x111')); // 273

// console.log(parseFloat('3.14abc')); // 3.14

// console.log(parseInt(null)); // NaN
// console.log(parseInt(undefined)); // NaN
// console.log(parseInt(true)); // NaN
// console.log(parseInt(''));

// var num = parseFloat('3.1415926');
// console.log(num.toFixed(2));

// console.log(Number(''));

// console.log(Boolean(1));

// console.log(Boolean());

// var a = 2 > 1 > 3; // true
// var b = 2 > 1 == 1; // true
// var c = undefined == 0; // false
// var d = undefined === null;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// console.log(isNaN(123));
// console.log(isNaN(123)); // false
// console.log(isNaN('123')); // false
// console.log(isNaN('123abc')); // true
// console.log(isNaN('')); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN(null)); // false

// console.log({}.toString());
// console.log(Number({})); // NaN
// console.log(Number({ a: 1 })); // NaN

// console.log(parseInt([]));
// var a = ['1', '2', '3'];
// var res = a.map(parseInt);
// console.log(res);

// console.log(parseFloat('1.234+567'));

// console.log(parseFloat('1.2344+133'));
// console.log('Infinity');

// console.log(parseFloat('900719925474099267n'));

// console.log(parseInt(10n));
// console.log(parseFloat('1.23e10e'));

// const obj = {
//   toString() {
//     return '123.456abc';
//   },
// };

// console.log(parseFloat(obj));
// console.log(parseFloat(null)); // NaN
// console.log(parseFloat(undefined)); // NaN
// console.log(parseFloat('')); // NaN
// console.log(parseFloat(true)); // NaN
// console.log(parseFloat(false)); // NaN
// console.log(parseFloat(function () {}));

// console.log(parseFloat([1.1, 2, 3]));
// console.log(parseFloat([null, 2, 3]));

console.log(isNaN(undefined));
console.log(Number.isNaN(undefined));
