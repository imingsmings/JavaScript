// console.log(1 === '1'); // false
// console.log(+0 === -0); // true
// console.log({} === {}); // false
// console.log(NaN === NaN); // false
// console.log(NaN === undefined); // false
// console.log(Infinity === Infinity); // true
// console.log(Infinity === -Infinity); // false

// var obj = {};

// Object.defineProperty(obj, 'myZero', {
//   value: -0,
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

// Object.defineProperty 在试图修改不可变属性时，
// 如果这个属性确实被修改了则会抛出异常，反之什么都不会发生
// Object.defineProperty(obj, 'myZero', {
// +0/0抛出异常,不能重新定义myZero属性
//   value: +0,
// });

console.log(Object.is(-0, +0)); // false
console.log(Object.is(+0, +0)); // true
console.log(Object.is(1, '1')); // false
console.log(Object.is(1, 1)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(true, true)); // true
console.log(Object.is(true, false)); // false

var obj = {};
console.log(Object.is(obj, obj)); // true
console.log(Object.is({}, {})); // false

Object.myIs = function (a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  return a !== a && b != b;
};
