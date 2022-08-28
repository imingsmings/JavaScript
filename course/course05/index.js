// function fb(n) {
//   if (n <= 0) {
//     return 0;
//   }

//   if (n <= 2) {
//     return 1;
//   }

//   return fb(n - 1) + fb(n - 2);
// }

// console.log(fb(7));

// test();
// function test() {
//   console.log(1);
// }

// console.log(a);
// var a = 10;

// var a = 1;
// b = 2;
// /**
//  * window = {
//  *  a: 1
//  *  b: 2
//  * }
//  */
// console.log(a);

function test(a) {
  console.log(a); // function a
  var a = 1;
  console.log(a); // 1
  function a() {}
  console.log(a); // 1
  var b = function () {};
  console.log(b); // function () {}
  function d() {}
}
// test(1);

/**
 * AO = {
 *  a: undefined -> 1 -> function a(){} -> 1
 *  b: undefined -> function (){}
 *  d: function d(){}
 * }
 */

function test1(a, b) {
  console.log(a); // 1
  c = 0;
  var c;
  a = 5;
  b = 6;
  console.log(b); // 6
  function b() {}
  function d() {}
  console.log(b); // 6
}
// test1(1, 5);
/**
 * AO = {
 *  a: undefined -> 1 -> 5
 *  b: undefined -> 5 -> function b(){} -> 6
 *  c: undefined -> 0
 *  d: function d() {}
 * }
 *
 */

// var a = 1;
// function a() {
//   console.log(2);
// }

/**
 * GO = {
 *  a: undefined -> function a() {} -> 1
 * }
 *
 */

// console.log(a);

// console.log(b, c);
// function b() {}
// var c = function () {};

var b = 3;
console.log(a); // function a(a) {}
function a(a) {
  console.log(a); // function a() {}
  var a = 2;
  console.log(a); // 2
  function a() {}
  var b = 5;
  console.log(b); // 5
}

a(1);

/**
 * AO = {
 *  a: undefined -> 1 -> function a() {} -> 2
 *  b: undefined -> 5
 * }
 *
 * AO = {
 *  b:undefined -> 5
 * }
 *
 * GO = {
 *  b: undefined
 *  a: function a() {}
 * }
 */

// aa = 1;
// function test2() {
//   console.log(aa);
//   aa = 2;
//   console.log(aa);
//   var aa = 3;
//   console.log(aa);
// }

// test2();
