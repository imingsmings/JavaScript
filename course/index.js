// console.log({} + {});
// console.log(({} + {}).length); // 30
// console.log(([] + []).length); // 0
// console.log(function () {}.toString()); // 'function () {}'
// console.log({} + []);
// console.log([] + {});

/**
1. 数组、字符串为有序结构
2. 对象为无序结构
3. {} —> toString -> '{}' 没有数据意义
4. [1,2,3] -> toString -> '1,2,3' 有数据意义
5. function() {} -> toString -> 'function () {}.toString()' JS可以处理字符串程序
6. 对象的toString没有意义

遍历与迭代:
迭代：1.0 - 3.0 
遍历: 1.0 2.0 3.0
迭代是有顺序的
*/

// var arr = [1, 2, 3];
// for (let v of arr) {
//   console.log(v);
// }

/**
为什么ES6要增加箭头函数?
this -> 执行期上下文
this -> 执行期 -> 执行的时候决定的上下文关系

this在函数的执行期，其指向是不确定的，不稳定的
箭头函数在定义时，this的指向已经明确
箭头函数不能new的原因:
  new的过程属于执行期 会改变this的指向 箭头函数的目的被改变了
 */

// var obj = {
//   test(callback) {
//     callback();
//   },
// };

// obj.test(function () {
//   console.log(this);
// });

// obj.test(() => {
//   console.log(this);
// });

// function test() {}

// var t = new test();
// console.log(t);

// console.log(Function.prototype.toString());
// console.log(RegExp.prototype.toString());
// console.log(Array.prototype.toString());

// var arr = [1, 2, 3];
// var it = arr.keys();
// console.log(it.next());
