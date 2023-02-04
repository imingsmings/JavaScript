// function foo(x, y) {
//   x = typeof arguments[0] !== undefined ? arguments[0] : 1;
//   y = typeof arguments[1] !== undefined ? arguments[1] : 2;

//   return x + y;
// }

// 函数默认值
// function foo(x = 1, y = 2) {
//   return x + y;
// }
// console.log(foo(3, 4)); // 7
// console.log(foo(0, 4)); // 4

// let x = 1;
// function foo(x = 1) {
//   var x = 2;
//   console.log(x);
// }
// foo(5);

// let a = 99;
// 惰性求值:每一次都需要重新计算表达式的值
// function foo(b = a + 1) {
//   console.log(b);
// }
// foo();
// a = 100;
// foo();

// let [a, [b]] = [1, [2]];
// console.log(a);
// console.log(b);

// 解构失败: 变量多了
// 不完全解构: 值多了

// const [a = 5] = [];
// console.log(a);

// const { a: x, a: y } = { a: 1 };
// console.log(x);

// var x = 200,
//   y = 300,
//   z = 100;
// var obj = { x: { y: 42 }, z: { y: z } };
// console.log(obj);

// ({ y: x = { y: y } } = obj);
// ({ z: y = { y: z } } = obj);
// ({ x: z = { y: x } } = obj);

// console.log(x.y, y.y, z.y);
// console.log(x, y, z);

// function foo({ x = 10 } = {}, { y } = { y: 10 }) {
//   console.log(x, y);
// }
// foo();
// foo({}, {});
// foo({ x: 2 }, { y: 3 });

// Number.prototype.a = 1;
// const { toString, a } = 123;
// console.log(toString === Number.prototype.toString, a);

const obj = { a: 1 };
const { toString, a } = obj;
console.log(toString);
console.log(a);
