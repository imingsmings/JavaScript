// function test() {
//   console.log('test');
// }

// test();
// console.log(a);
// var a = 10;
function test(a) {
  console.log(a); //
  var a = 1;
  console.log(a);
  function a() {}
  console.log(a);
  var b = function () {};
  console.log(b);
  function d() {}
}
test(2);
console.log('---------------------');
/**
AO = {
  a: undefined -> 2 -> function a() {} -> 1
  b: undefined -> function () {}
}
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
/**
 AO = {
   a: undefined -> 1 -> 5
   b: undefined -> function b() {} -> 6
   c: undefined -> 0
   d: function () {}
 }
 */
test1(1);
console.log('-------------------------');

// var a = 1;
// function a() {
//   console.log(2);
// }
// console.log(a);
/**
 AO = {
  a: undefined -> function a() {} -> 1
 }
 */
console.log('-------------------------');

// var b = 3;
// console.log(a); // function a() {}
// function a(a) {
//   console.log(a); // function a() {}
//   var a = 2;
//   console.log(a); // 2
//   function a() {}
//   var b = 5;
//   console.log(b); // 5
// }
// a(1);
/*
GO = {
  b: undefined
  a: function a() {}
}

AO = {
  a: undefined -> 1 -> function a() {} -> 2
  b: undefined -> 5
}
*/

// a = 1;
// function test() {
//   console.log(a); // undefined
//   a = 2;
//   console.log(a); // 2
//   var a = 3;
//   console.log(a); // 3
// }
// test();
// var a;
/**
GO = {
  a: undefined -> 1
  test: function test() {}
} 

AO = {
  a: undefined 
}
 */

function test2() {
  console.log(b); // undefined
  if (a) {
    var b = 2;
  }
  c = 3;
  console.log(c); // 3
}

// var a;
test2();
// a = 1;
// console.log(a); // 1

/*
GO = {
  a: undefined
  test2: function test2() {}
  c: 3
}
AO = {
  b: undefined
}
*/

function test3() {
  return a;
  a = 1;
  function a() {}
  var a = 2;
}

console.log(test3()); //function a() {}
/*
GO = {
  a: 1
}
AO = {
  a: undefined -> function a() {} -> 2
}
*/

function test4() {
  a = 1;
  function a() {}
  var a = 2;
  return a;
}

console.log(test4()); // 2

a = 1;
function test5(e) {
  function e() {}
  arguments[0] = 2;
  console.log(e); // 2
  if (a) {
    var b = 3;
  }
  var c;
  a = 4;
  var a;
  console.log(b); // undefined
  f = 5;
  console.log(c); // undefined
  console.log(a); // 4
}

var a;
test5(1);
/**
GO = {
  a: undefined 
  test5: function test5() {}
  f: 5
}
AO = {
  e: undefined -> 1 -> function e() {} -> 2
  b: undefined
  a: undefined
  c：undefined
}
 */
