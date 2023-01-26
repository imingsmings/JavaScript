/**
 * let 声明块级作用域的局部变量, 初始化可选
 *
 */
// var/let/const  a     =     1
//      声明      标识  赋值    值

/**
 *    栈内存
 * a   1
 *
 *
 */

// 认为重复声明是bug
// var a = 1;
// var a = 2;

// 修复bug
// let a = 1;
// let a = 2;

// console.log(a);
// var a = 1;
/**
 * 预编译
 * GO { a: undefined }
 * 1. 声明a标识
 * 2. 将a标识初始化为undefined
 *
 * 执行
 * console.log(a) -> undefined
 * 1. 赋值给a标识1
 *
 */

// test();
// function test() {
//   // 封装 任意位置可调用的封装结构
// }

// const test1 = () => {};

// Uncaught ReferenceError: Cannot access 'a' before initialization
/**
 * 预编译
 * GO {
 *  a,不初始化
 * }
 *
 * a被声明了, 是已经存在的一个标识符, 只是没有初始化
 *
 * 预编译阶段, 但不初始化undefined或者其他值
 * 初始化的过程放到了执行阶段
 * 解决声明在后访问变量的问题
 *
 * TDZ: Temporary Dead Zone
 * 从代码开始执行到声明之前, 都是TDZ
 */
// console.log(a);
// let a = 1;

let a; // JS中, undefined是唯一自动化生成的默认值
console.log(a);
