// let sym1 = Symbol();
// let sym2 = Symbol("key"); // optional string key
// let sym3 = Symbol("key");

// console.log(sym2 === sym3); // false

// const sym = Symbol();

// const objs = {
//     [sym]: "value"
// }

// console.log(objs[sym]);

// const key = Symbol('key');
// const method  = Symbol('method');

// class MyClass {
//   [key] = 'value';
//   [method]() {
//     console.log('method');
//   }
// }

// const cc = new MyClass();
// console.log(cc[key]);
// cc[method]();

// interface UserInfoOptions {
//     a: Symbol;
// }

// const obj1: UserInfoOptions = {
//     a: Symbol('a')
// }

// console.log(obj1.a);

// const sym: unique symbol = Symbol()
// console.log(typeof sym);

// const sym1: unique symbol = Symbol();

// A variable whose type is a 'unique symbol' type must be 'const'.
// let sym2: unique symbol = Symbol();

// let sym3: typeof sym1 = sym1

// class C {
//     static readonly StaticSymbol: unique symbol = Symbol();
// }

// console.log(sym1 === sym3);

const sym1: unique symbol = Symbol();
const sym2: unique symbol = Symbol('key');
// This comparison appears to be unintentional because the types 'typeof sym1' and 'typeof sym2' have no overlap.
console.log(sym1.valueOf() === sym2);
