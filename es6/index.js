/**
 * 1. let同一作用域下不可重复声明
 *  全局作用域
 *  函数作用域形参与声明
 * 2. let预编译时不会进行初始化
 *  产生暂时性死区:代码开始到声明之前
 *    声明之前访问变量
 *    函数参数空间可能产生
 * 3. let只会在当前的块级作用域内生效
 * 4. 不建议在块级作用域当中使用函数声明的方式声明函数,而是用函数表达式的方式
 * 5. 块级作用域没有返回值
 *
 *
 * for循环中有两个块级作用域
 * for()中作用域可看做{}的父级作用域
 * let本质上就是为JS增加一个块级作用域
 */

//  let a = 1;
//  let a = 2
// function test(a) {
//   let a = 10;
//   console.log(a);
// }
// test(100);

// function test(a) {
//   {
//     let a = 10;
//   }
//   console.log(a);
// }
// test(100);

// console.log(a);
// let a = 10;

// function test() {
//   console.log(a);
//   let a = 10;
// }
// test();

// var a = a;
// console.log(a); // undefined
// let a = a; // 报错
// console.log(a);

// 函数参数暂时性死区
// function test(x = y, y = 2) {
//   console.log(x, y);
// }
// test();
// function test(x = 2, y = x) {
//   console.log(x, y);
// }
// test();

// console.log(typeof a);
// let a;

// for (; 1; ) {
//   let a = 1;
// }
// 不报错,永远执行不到
// console.log(a);

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr[i] = function () {
//     console.log(i);
//   };
// }
// for (var i = 0; i < 10; i++) {
//   arr[i](); // 0 ~ 10
// }

// for (var i = 0; i < 10; i++) {
//   var i = 'a';
//   console.log(i);
// }

/*
if (true) {
  let i = 0;
  {
    let i = 'a';
    console.log(i);
  }
}
if (true) {
  let i  = 1;
  {
    let i = 'a';
    console.log(i);
  }
}
for循环中有两个块级作用域
for()中作用域可看做{}的父级作用域
let本质上就是为JS增加一个块级作用域
*/
// for (let i = 0; i < 10; i++) {
//   var i = 'a' // 报错
//   let i = 'a';
//   console.log(i);
// }

// if (true) {
//   let a = 2;
//   {
//     var a = 1; // 报错
//   }
// }

// function test() {
//   function test1() {}
// }

// {
//   function test() {
//     console.log('123');
//   }
// }
// test(); 报错
