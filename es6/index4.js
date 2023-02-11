/**
 * 若有默认值,形参与实参的映射关系不存在
 */
// function test(a, b, c = 2) {
//   console.log(arguments.length);
// }
// test(1);
// console.log(test.length);

// function foo({ x, y }) {
//   console.log(x, y);
// }
// foo(undefined);

// var x = 1;
// function foo(
//   x,
//   y = function () {
//     var x = 2; // 修改foo的第一个参数
// var x = 2;
// let x = 3;
//     console.log(x);
//   }
// ) {
// var x = 3;
//   y();
//   console.log(x);
// }

// foo();
// console.log(x);

// function foo() {
//   return (a) => {
//     console.log(this.a);
//   };
// }

// var obj1 = { a: 2 };
// var obj2 = { a: 3 };
// var bar = foo.call(obj1);
// bar.call(obj2);

// var obj = {
//   get a() {
//     return 2;
//   },
// };

// Object.defineProperty(obj, 'b', {
//   get: function () {
//     return this.a * 2;
//   },
//   enumerable: true,
// });

// console.log(obj.a);
// console.log(obj.b);

Object.defineProperty(Number, 'NEGATIVE_ZERO', {
  value: -0,
  writable: false,
  enumerable: false,
  configurable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, 'NEGATIVE_ZERO', {
    value: v,
  });
}

// attemptMutation(-0);

function sameValueZero(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}

// console.log(sameValueZero(NaN, NaN));

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const clone = (obj) => {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
};

console.log(clone(obj));
