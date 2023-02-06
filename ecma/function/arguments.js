// function* gen(obj) {
//   for (var o of obj) {
//     yield o;
//   }
// }

// function test(a, b, c) {
//   console.log(arguments);
//   console.log(arguments.toString()); // [object Arguments]
//   console.log(Array.isArray(arguments)); // false
//   console.log(arguments.callee); // 宿主函数 test

//   var it = gen(arguments);
//   console.log(it.next());
// }
// test(1, 2, 3);

// var test1 = (...args) => {
//   console.log(args);
//   console.log(arguments);
// };

// test1(1, 2, 3);

// function test() {
//   // 这种写法会阻止V8引擎优化
//   // var argArr = [].slice.call(arguments);
//   // console.log(argArr);

//   var argArr =
//     arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
//   console.log(argArr);
// }

// test(1, 2, 3);

// function test(a) {
//   arguments[0] = 10;
//   console.log(a, arguments[0]); // 10 10

//   a = 100;
//   console.log(a, arguments[0]); // 100 100
// }

// test(1);

// function test(a = 100) {
//   arguments[0] = 10;
//   // 形参中但凡有一个参数有默认值，arguments都不会对应跟踪参数最终的值
//   console.log(a, arguments[0]); // 1 10

//   a = 1000;
//   console.log(a, arguments[0]); // 1000 10
// }

// test(1);

// function test(a, b, c = 10) {
//   arguments[0] = 100;
//   arguments[1] = 200;
//   arguments[2] = 300;

//   console.log(a, arguments[0]);
//   console.log(b, arguments[1]);
//   console.log(c, arguments[2]);
// }

// test(1, 2, 3);

// function test(...args) {
//   arguments[0] = 100;
//   arguments[1] = 200;
//   arguments[2] = 300;

//   console.log(args[0], arguments[0]);
//   console.log(args[1], arguments[1]);
//   console.log(args[2], arguments[2]);
// }

// test(1, 2, 3);

// function test({ a, b, c }) {
//   arguments[0] = 100;
//   arguments[1] = 200;
//   arguments[2] = 300;
//   console.log(a, arguments[0]); // 1 100
//   console.log(b, arguments[1]); // 2 200
//   console.log(c, arguments[2]); // 3 300
// }

// test({ a: 1, b: 2, c: 3 });

function test(a, b, c) {
  'use strict';
  a = 10;
  b = 20;
  c = 30;

  console.log(a, b, c);
  console.log(arguments);
}

test(1, 2, 3);
