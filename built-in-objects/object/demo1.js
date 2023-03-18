/**
 * 类数组 -> Array-Like
 * 类似于数组的对象 -> 现在基本不用
 *
 * 类数组是一种数据结构, 不是数据类型 -> Object {}
 *
 * DOM -> get系的方法 -> DOM集合 -> 类数组
 *
 * 类数组的特性:
 *  1. 对象 -> 无序列表 -> 属性/方法
 *  2. 数组特征 -> 有序列表 -> 数据集合
 *
 * DOM节点 DOM对象 DOM元素
 * 节点: Node -> DOM树
 * 对象: Object -> ES -> 属性/方法
 * 元素: Element -> HTML Body -> HTML元素
 */
// const obj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   3: 'd',
//   a: 100,
//   push: Array.prototype.push,
//   length: 4,
// };
/**
 * [1,2,3,4] -> length: 4
 * push(4) -> [1,2,3,4,5]
 * length 4 -> push -> index 4 -> push(5)
 *
 * length必须准确, 否则位置会错乱
 * 1. 准确的长度
 * 2. 操作时有个准备的位置参考
 */

// obj.push('e');
// console.log(obj);

// --------------------------------------------------------------------------------
/**
 * Object.defineProperty()
 * Object.defineProperties()
 * Object.create()
 *
 * 属性的特征
 *  value: 值
 *  writable: 可写
 *  enumerable: 可枚举
 *  configurable: 可删
 * 字面量声明时,属性的特征都是开放的
 */
// const obj = {};
// Object.defineProperty(obj, 'a', {
//   value: 1,
// 不指定默认是false
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// Object.defineProperty(obj, 'b', {
//   get() {
//     console.log('GET');
//   },
//   set(newValue) {
// console.log(newValue);
//     obj.b = newValue;
//   },
// });

// console.log(obj);
// obj.b; // get的过程 —> get () -> value
// obj.b = 100; // set的过程 —> set (newValue) -> value -> newValue

// const data = {
//   a: 1,
//   b: 2,
// };

// const obj = {};

// for (let key in data) {
//   Object.defineProperty(obj, key, {
//     存储描述符
//     get() {
//       return data[key];
//     },
//     set(newValue) {
//       data[key] = newValue;
//     }
//   })
// }

// const obj = Object.create(Object.prototype, {
//   a: {
//     value: 1,
//     writable: false,
//     enumerable: false,
//     writable: false,
//   },
// });
// console.log(obj);

// --------------------------------------------------------------------------------
/**
 * Object
 * Reflect -> 通用方法 -> 经过优化
 */

// const data = {
//   a: 1,
//   b: 2,
//   [Symbol('c')]: 3,
//   [Symbol('d')]: 4,
// };

// const data = {};
// Object.defineProperties(data, {
//   a: {
//     value: 1,
//     enumerable: false,
//   },
//   b: {
//     value: 2,
//     enumerable: true,
//   },
// });

// console.log(Object.getOwnPropertyDescriptor(data, 'a'));
// console.log(Object.getOwnPropertyDescriptors(data));
// console.log(Object.getOwnPropertySymbols(data));
// console.log(Object.getOwnPropertyNames(data));
// console.log(Object.keys(data));
// console.log(Object.values(data));
// console.log(data.propertyIsEnumerable('a'));
// console.log(Object.entries(data));

// --------------------------------------------------------------------------------
/**
 * Object.freeze() -> 不可修改、不可删除、不可添加
 * Object.seal() -> 可修改、不可删除、不可添加
 * Object.preventExtensions() -> 可修改、可删除、不可添加
 * Object.isFrozen() -> 是否被冻结
 * Object.isSealed() -> 是否被密封
 * Object.isExtensible() -> 是否可扩展 -> 是否可添加新的属性
 */

// const o = { a: 1 };
// const obj = Object.freeze(o);
// obj.a = 2;
// delete obj.a;
// obj.b = 2;
// console.log(obj === o); // true
// console.log(Object.isFrozen(o)); // true

// here is error
// Object.defineProperty(obj, 'a', {
//   value: 2,
// });

// console.log(Object.isExtensible(obj)); // false

// const obj = Object.seal(o);
// const obj = Object.preventExtensions(o);
// obj.a = 2;
// delete obj.a;
// obj.b = 2;
// console.log(obj);

// --------------------------------------------------------------------------------
/**
 * Object.assign(target, ...sources) -> 合并对象 -> 返回target的引用
 * 不可枚举、原型自定义属性 -> 不会被合并
 * 源对象会覆盖目标对象的同名属性
 */

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = Object.create(
//   { x: 100 },
//   {
//     c: {
//       value: 1,
//       enumerable: true,
//     },
//   }
// );
// const obj = Object.assign(o1, o2, o3);

// console.log(obj);
// console.log(obj === o1);

// const o1 = { a: 1 };
// const o2 = { a: 2, b: 2 };
// const obj = Object.assign(o1, o2);
// console.log(obj);

// const obj = Object.assign({}, 123, 'abc', undefined, null, false);
// console.log(obj); // {0: 'a', 1: 'b', 2: 'c'}

// --------------------------------------------------------------------------------
/**
 * obj.hasOwnProperty(prop) -> 是否是自身属性
 * Object.hasOwn(obj, prop) -> 是否是自身属性
 */
