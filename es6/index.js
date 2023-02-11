// const obj = {
//   a: 1,
//   b: 2,
// };
// console.log(Object.getPrototypeOf(obj));

// function Person() {
//   this.name = 'Tony';
//   this.age = 18;
// }

// var person = new Person();
// console.log(person);

// Object.setPrototypeOf();
// Object.getPrototypeOf();

// const proto = {
//   x: 20,
//   z: 40,
// };

// const obj = {
//   x: 10,
// };

// Object.setPrototypeOf(obj, proto);
// console.log(obj);

// const obj = Object.setPrototypeOf(1, { a: 1 });
// console.log(Object.getPrototypeOf(obj));

// const proto = {
//   y: 20,
//   z: 40,
// };

// const obj = {
//   x: 10,
//   super在简写中生效
//   foo() {
//     console.log(super.y);
//   },
// };

// Object.setPrototypeOf(obj, proto);
// obj.foo();

// symbol 原始值类型的值 number string boolean undefined null
// Symbol不是构造函数

// let s1 = Symbol();
// let s2 = Symbol();
// const obj = {
//   a: 1,
//   s1,
//   // [Symbol.iterator]: function () {},
// };
// console.log(s1 === s2);
// console.log(s1);
// console.log(typeof s1);

// console.log(obj);

// const obj = {
// a: 1,
// [Symbol.toPrimitive]() {
//   return 'abcd';
// },
// };
// console.log(obj);
// const s = Symbol(obj);
// console.log(typeof Symbol);
// console.log(Number(s));
// console.log(Object.getPrototypeOf(s));
// symbol不能进行隐式转换,仅限于Boolean
// console.log(s + 'abcd');

// let name = Symbol();
// let person = {
//   [name]: 'wxm',
// };
// console.log(person);

// Symbol.for()  Symbol.keyFor()
// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1 === s2); // false
// let s1 = Symbol.for('abc');
// let s2 = Symbol.for('abc');
// console.log(s1 === s2); // true
// let res = Symbol.keyFor(s1);
// console.log(res);

// for...in不能遍历Symbol属性
const obj = {
  c: 1,
};
const a = Symbol('a');
const b = Symbol('b');
obj[a] = 'hello';
obj[b] = 'world';

// console.log(obj);
// Object.getOwnPropertySymbols();
const objs = Object.getOwnPropertySymbols(obj);
console.log(objs);
