/**
 * variable -> vary 改变
 * variable -> mathematics 数学 -> 变量 -> variables -> 变量的统称
 *
 * JS -> var
 *
 * let -> 拉丁语 latter -> 放手 放开 拿开 -> 使事物顺其自然变化 -> 使动的含义 -> let sth be sth
 *
 * const -> constant -> con/come -> 一起/持续/继续 ->
 *                   -> stand -> 站立
 *                   -> 常态
 *       -> 计算机专业术语 -> 常量 -> read-only
 *
 * 计算机英语上分析 var在ES3当中的使用原因?
 *
 * var -> JS -> Mathematics数学
 * let const -> ES6 -> ES3草案就提出来
 *
 * ES3为什么没有采用let/const?
 * 编程复杂度的问题。
 * 1. ES3刚出现时有一个在设计语言上的重大问题,JS引擎对let/const会采用分析机制,
 *    而当时的浏览器性能有限,并且没有单独的JS引擎(集成在渲染引擎中),
 *    渲染本身会消耗大量性能,若再加上分析机制,性能会大大降低,这就决定了JS的设计必须要简单。
 * 2. 语言本身的复杂度:浏览器对语言的支持。
 * 3. 浏览器厂商对规范的支持。
 *
 * ES6为什么提出let/const?
 * 1. 宿主环境增加 浏览器/Node
 * 2. 浏览器性能大大提升,CPU/内存提升
 * 3. 与时俱进,提供更丰富的API开发更高级的程序
 *
 * rust: let 常量 mut 变量
 * c++: const read-only variable
 * go: const var
 *
 */
// -------------------------------------------------------------

/**
 * 定义和声明 Definitions and Declarations
 * var a = 1; 声明
 * 全局变量 global-scoped variables
 * 局部变量 function-scoped variables
 * 初始化是可选的
 */
var a; // declaration
a = undefined; // initialization

console.log(b); // undefined
var b = 1; // undefined -> 1
/**
 * var b = 1;
 *
 * 预编译阶段
 * var b;
 * GO {
 *  b: undefined // initialization
 * }
 *
 * 执行期阶段
 * b = 1; // 赋值阶段
 *
 * var提升? hoisting
 */
// -------------------------------------------------------------

/**
 * let 声明块级作用域的局部变量 初始化可选
 *
 * global =? block x
 * module =? block 'use strict'
 *
 */
{
  // 块级作用域
}
/**
 * let/const/var  a     =   1;
 *     声明       标识  赋值  量/值
 *
 *     栈内存
 * a    1
 */

// var可重复声明,但被认为是一个Bug
// var d = 1;
// var d = 2;

// Identifier 'd' has already been declared
// let 不可重复声明,修复了var可重复声明的Bug
// let d = 1;
// let d = 2;

/**
 *
 * 预编译
 * GO { a: undefined }
 * 1. 声明a标识
 * 2. 将a标识初始化为undefined
 *
 * 执行
 * console.log(e) -> undefined
 * 1赋值给a标识
 */
// 不满足JS一行一行执行的原则
console.log(e);
var e = 1;

// 函数是一种封装,任意位置都可调用
// 因此hoisting是科学的
test();
function test() {
  console.log('test');
}

/**
 * Uncaught ReferenceError: Cannot access 'f' before initialization
 * 未捕获的引用错误: 初始化之前不能访问f
 *
 * 预编译
 * GO {
 *  f, 不初始化
 * }
 *
 * let真的不提升吗?
 *
 * var和let的区别?
 * 1. 预编译阶段var声明的变量的会被初始化,而let不会。
 * 2. let预编译阶段拿到声明,但不初始化undefined或者其他值,初始化的过程放到了执行阶段
 *    解决了声明在后可访问变量的问题
 *
 * TDZ: Temporary Dead Zone
 * 从代码开始执行到声明式之前
 */
// console.log(f);
// let f = 1;

let g; // JS系统中, undefined是唯一自动化生成的默认值,原始性的默认值
console.log(g);
// -------------------------------------------------------------

if (true) var h = 1; // statement -> bug,但是为了兼容未做处理
/**
 * Uncaught SyntaxError: Lexical declaration cannot appear in a single-statement context
 * 词法声明是不能在单行语句中的
 *
 * ES6中 var声明 -> 声明语句,非声明式
 * var在ES6中是不推荐的声明方法
 */
// if (true) let i = 2;

/**
 * declaration
 * let const async function class export import
 *
 * 其他的基本都是statement
 *
 * var test = function () {} // statement
 * const test = function () {} // declaration
 */

/**
 * 声明式: 把值绑定给标识的过程
 * 语句: 执行任务或行为
 *
 * var为什么没有归类为声明式?
 * 有作用域副作用,创建全局作用域属性
 */
// -------------------------------------------------------------

/**
 * block 块级
 */
// 封装独立作用域 use strict -> module
// 非use strict中,尽量不要在块中使用函数声明,可能导致解析错误
{
  const j = 1;

  function test1() {
    console.log('test1');
  }
}
// console.log(j);
// test1();
// -------------------------------------------------------------

/**
 * for使用let解决问题的原理
 *
 * for(1xx;2xx;3xx)
 * 1xx: initialization block 初始化块
 * 2xx: condition block 条件块
 * 3xx: operation block 操作块
 */
let arr = [];
/**
 * 不是let创建了块级作用域!!!
 * for循环中初始化块中用了let触发了一种作用域创建机制
 * 初始化照样做 let i -> 0
 * 每次迭代时发生以下事情:
 * 1. 系统会为for loop body创建一个新的词法作用域
 * 2. 在词法作用域中新声明一个i(let i)
 * 3. 将上一次迭代或者初始化的值赋值给这个新的i变量
 * 4. 对新的词法作用域内的i进行操作 i++
 *
 */
for (let i = 0; i < 5; i++) {
  // let i
  arr[i] = function () {
    console.log(i);
  };
}

arr.forEach((cb) => cb());

for (let i = 0, test = () => i; i < 5; i++) {
  console.log(test());
}
for (let i = 0; i < 5; i++, test = () => i) {
  console.log(test());
}
// -------------------------------------------------------------

/**
 * const 声明常量的关键字
 * 1. 必须初始化
 * 2. 不允许重新赋值
 * 3. 指向引用值,属性可删除或更改
 * 4. 如果是常量性质的,推荐用全大写,下划线分割词
 * 5. 如果是变量性质的,推荐用小驼峰
 */
// Uncaught SyntaxError: Missing initializer in const declaration
// const k;
const k = {
  a: 1,
};
// 冻结对象,属性不可修改
const kk = Object.freeze({
  a: 1,
});
console.log(kk);
// Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'
kk.a = 2;
