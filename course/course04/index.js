// if (3 > 0) {
//   // for (var i = 0; i < 10; i++) {
//   //   console.log(i);
//   // }
//   cycle();
// }

// if (2 > 0) {
//   // for (var i = 0; i < 10; i++) {
//   //   console.log(i);
//   // }
//   cycle();
// }

// function cycle() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// function test(a, b) {
//   // console.log(a + b);
//   console.log(arguments);
//   a = 2;
//   console.log(arguments);
//   console.log(a + b);
// }

// function test() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }

// test(1, 2, 3, 4, 5);

// function test(a, b) {
//   // a = 3;
//   // console.log(arguments[0]); // 3

//   arguments[0] = 3;
//   console.log(a); // 3
// }

// test(1, 2);
// test(1);

// function test(name) {
//   // if (!name) {
//   //   return 'No Name'
//   // }
//   // return name
//   return name || 'No Name';
// }

// console.log(test('wxm'));

// // 全局变量
// var a = 1;
// function test1() {
//   // 局部变量
//   var b = 2;
//   console.log(a);

//   function test2() {
//     // 局部变量
//     var c = 3;
//     console.log(b);
//   }
//   test2();
//   console.log(c); // 报错
// }

// test1();

// function test(a = 1, b = 2) {
//   console.log(a, b);
// }

// function test(a, b) {
//   var a = arguments[0] || 1;
//   var b = arguments[1] || 2;
//   console.log(a, b);
// }

// test();
// test(1, 2);
// test(undefined, 2);

function test(a = 1, b = 2) {
  console.log(a, b);
}

test(undefined, 2);
// test(1, 2);
