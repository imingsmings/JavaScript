/**
 * Object 对象 -> 数据类型 -> 键值对容器
 *
 * Function -> Object() -> 构造器 -> 构造对象
 *
 * 所有的对象实例 -> Object.prototype -> null
 */

// ----------------------------------------------------------------------
/**
 * 对象的创建形式
 *  字面量
 *  实例化对象
 *  对象包装类
 *  初始化对象
 */
// 字面量
// const obj1 = {
//   a: 1,
//   b: 2,
// };

// 实例化对象
// const obj2 = new Object();
// obj2.a = 1;
// obj2.b = 2;

// 对象包装类
// const obj3 = Object();
// obj3.a = 1;
// obj3.b = 2;

// 初始化对象
// const obj4 = Object.create(null);
// obj4.a = 1;
// obj4.b = 2;

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// ----------------------------------------------------------------------
/**
 * 对象包装类: 要有对应的构造器
 * Object()是包装类构造器的鼻祖, 实例化或分配对应构造器
 *
 * null/undefined -> 没有构造器 -> {}
 * 数字 -> Number -> construct -> Number object
 * 字符串 -> String -> construct -> String object
 * 布尔 -> Boolean -> construct -> Boolean object
 * Symbol -> Symbol -> construct -> Symbol object
 * 引用 -> Object -> construct -> Object object -> 不会再次包装? -> 多此一举
 */

// const obj = Object(null);
// const obj = Object(undefined);
// console.log(obj);

// const obj = Object(1);
// console.log(obj);

// const str = Object('abc');
// 'abc'.length -> new String('abc') ->
// {'abc', length: 3} -> .length -> destroy {}
// console.log(str.length);

// const bool = Object(true);
// console.log(bool);

// const sym = Object(Symbol('abc'));
// console.log(sym);

// const obj1 = { a: 1 };
// const obj2 = Object(obj1);

// console.log(obj1 === obj2);

// const arr1 = [1, 2, 3];
// const arr2 = Object(arr1);
// console.log(arr1 === arr2);

// const map = new Map();
// const obj = Object(map);
// console.log(map === obj);

// ----------------------------------------------------------------------
/**
 * Object.prototype.constructor -> Object()
 * constructor -> 构造器标识 -> 对象的构造函数的引用
 */
// const obj = Object.create(null);
// console.log(obj.constructor); // undefined

// const obj = new Object();
// console.log(obj.constructor); // Object()

// function Test() {}
// const t = new Test();
// console.log(t); Test()

// ----------------------------------------------------------------------
/**
 * constructor 可修改
 *
 * 原始值 -> 修改 -> 无效,但不报错
 */

/**
 * 原始值
 * 1. str -> 'abc'
 * 2. str.constructor -> new String('abc') -> .constructor <- Number -> destroy String {}
 * 3. str.constructor -> new String('abc') -> .constructor -> String
 */
// var str = 'abc';
// str.constructor = Number; // 不报错
// console.log(str.constructor); // String()

/**
 * 引用值
 * constructor存在的意义: 可以动态的选择一个可能不明确的构造器去实例化
 *
 * new Test() / new Test 功能相同,前者可传递参数
 * new
 * 1. 执行函数, 相当于()
 * 2. 内部创建对象 {}
 * 3. this -> 属性 -> {}
 * 4. this -> {}
 * 5. return this
 *
 * 对象的constructor 可改
 * 1. 不涉及包装类
 * 2. 起到程序上的作用
 */
// const obj = {};
// obj.constructor = function Test() {
//   this.a = 1;
// };
// const obj1 = new obj.constructor();
// console.log(obj);
// console.log(obj1);
// ----------------------------------------------------------------------

/**
 * 继承
 * 尽量不操作constructor, 可能引起混乱
 */

// function Parent() {}
// Parent.prototype.test = function test() {};

// function Child() {}
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.create = function () {
//   return new this.constructor();
// };
// Child.prototype.constructor = Child;

// const child = new Child();
// const child1 = child.create();
// console.log(child1);

// ----------------------------------------------------------------------
/**
 * var obj = {}
 *  obj === {} x
 *  test ==== function () {} x
 *  test -> 变量名 -> 标识 -> 表示一个空间 -> 地址 -> 堆内存空间 -> 引用
 *
 *  new value.constructor -> Object/Array -> new -> Object/Array 执行 -> 创建实例
 */

// ----------------------------------------------------------------------
/**
 * 原型链
 */

/**
 * function Object() {
 *  this.a = 1;
 *  this.b = 2;
 * }
 *
 * new Object() -> {a: 1, b: 2}
 *
 * BaseObject {
 *  c: 3,
 *  d: 4
 * }
 *
 * 对象的继承关系 -> 链式原理
 *
 * Internal Methods / Internal Slots / Internal properties
 * 决定着什么样的东西有什么样的属性
 *
 * [[prototype]] -> 原型对象
 * ES6 -> 新的标准 -> 内部属性Prototype -> 存在原型链和继承功能
 *
 * function test() {}
 * test -> 能否执行 -> [[call]]
 *
 * const test = () => {}
 * new test -> 能否构造 -> [[construct]]
 */

// function Test() {
//   this.a = 1;
// }
// Test.prototype.b = 2;
// Object.prototype.c = 3;

// const test = new Test();

/**
 * Test test {
 *  a: 1,
 *  [[prototype]]: Test.prototype {
 *    b: 2,
 *    [[prototype]]: Object.prototype {
 *     c: 3,
 *      __proto__: null
 *    }
 *  }
 * }
 *
 * test.a -> 1
 * test.b -> test.[[prototype]].b -> 2
 * test.c -> test.[[prototype]].[[prototype]].c -> 3
 *
 * 原型或原型链继承
 * 系统帮你省略掉了所有通过[[prototype]]访问过程
 *
 */

// ----------------------------------------------------------------------
/**
 * 原型链的顶端: null / Object.prototype
 *
 * __proto__ -> 旧的Web标准 -> 浏览器一直遵守
 * ES6 -> 禁止通过[[prototype]]直接访问原型
 * __proto__ -> 原型
 *
 * 浏览器 -> __proto__ -> 封顶 -> 原型链不可能一直延伸下去
 *
 * Object.prototype.__proto__ = 1; 不报错,但不会生效
 * Object.prototype.__proto__ = {}; 报错
 *
 * 意图: 扩展原型链 or 不是
 * 原始值不会扩展原型链
 */

// Object.prototype.__proto__ = {}; // 报错
// console.log(Object.prototype);

function MyObject() {}

Object.defineProperty(MyObject.prototype, '__proto__', {
  get() {
    return null;
  },
  set(newValue) {
    if (typeof newValue === 'object' && newValue !== null) {
      throw new TypeError(
        `Immutable prototype object '#<MyObject>' cannot have their prototype set`
      );
    }
  },
});

MyObject.prototype.__proto__ = 1;
console.log(MyObject.prototype.__proto__);

// ----------------------------------------------------------------------
/***
 * __proto__: 原型链节点 -> 老Web标准 —> 保证兼容性
 * 对象构造函数的prototype
 *
 * [[prototype]] -> 不可操作、不可访问
 * __proto__ -> 可操作、可访问
 *
 * 标准是继承 -> [[prototype]]实现
 *
 */

// const obj = {};
/**
 * 尽量不使用这种方式访问原型 obj.__proto__
 * 访问及操作存在性能问题
 * 会影响其他其他对象的继承操作性能
 */
// console.log(obj.__proto__);

const obj = Object.create({ a: 1 });
/**
 * 访问及设置原型
 *  Object.getPrototypeOf(obj)
 *  Object.setPrototypeOf(obj, prototype)
 */
console.log(Object.getPrototypeOf(obj));

// ----------------------------------------------------------------------
/**
 * __proto__ 断链现象
 * 可通过 Object.getPrototypeOf(obj) 拿到原型
 */
const obj1 = Object.create(null);
obj1.a = 1;
obj1.b = 2;

const obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

console.log(obj2);
