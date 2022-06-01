// --------------------------------------
// function test(b) {
//   this.d = 3;
//   var a = 1;
//   function c() {}
// }

// test(123);
// console.log(d); // 3
// --------------------------------------

// --------------------------------------
// function Test() {
//   this.name = '123';
// }

// var test = new Test();
// console.log(test);
/**
 * 此时的AO与GO
 * AO = {
 *  this: window -> this -> { name: '123', __proto__: {} }
 * }
 * GO = {
 *  Test: function Test() {}
 *  test: { name: '123', __proto__: {} }
 * }
 */
// --------------------------------------

// ---callee-----------------------------------
// function test(a, b) {
//   // 正在执行的函数对象
//   console.log(arguments.callee);
//   // 形参列表长度
//   console.log(test.length);
//   // 实参列表长度
//   console.log(arguments.length);
// }
// test(1, 2, 3);
// --------------------------------------

// ---callee应用----------------------------------
// var sum = (function (n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n + arguments.callee(n - 1);
// })(100);
// console.log(sum);
// --------------------------------------

// ----caller----------------------------------
// function test1() {
//   test2();
// }
// function test2() {
// 返回调用当前函数的函数引用
//   console.log(test2.caller);
// }
// test1();
// --------------------------------------

// --------------------------------------
// function foo() {
//   bar.apply(null, arguments);
// }
// function bar(args) {
//   console.log(arguments); // [1,2,3,4,5]
// }
// foo(1, 2, 3, 4, 5);
// --------------------------------------

// --------------------------------------
// typeof 返回值:
// number string boolean object function undefined
// --------------------------------------

// --------------------------------------
// function myIsNaN(num) {
//   var res = Number(num) + '';
//   if (res == 'NaN') {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(myIsNaN('123'));
// --------------------------------------

// --------------------------------------
// console.log({} == {}); // false
// --------------------------------------
