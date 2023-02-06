// function test() {}

// test();
// var obj = new test();
// console.log(obj);

// function Test(a, b) {
//   // var obj = new Object()
//   // this = obj
//   // this.a = a
//   // this.b = b
//   // return this
//   this.a = a;
//   this.b = b;
// }

// var obj = new Test(1, 2);
// console.log(obj);

// function Test(name) {
//   this.name = name;
// }

// function Test() {}
// Test.a = 1;

// const t = new Test();
// console.log(t);
// console.log(Test.prototype);

// function Test() {}
// Test.sum = function () {
//   // console.log(this);
//   const { a, b } = this;
//   return a + b;
// };

// const obj = { a: 1, b: 2 };

// const res = Test.sum.call(obj);
// console.log(res);

// const obj = {};
// const obj = new Object();

// const obj = Object.create(Object.prototype, {
//   a: {
//     value: 1,
//     enumerable: true,
//   },
//   b: {
//     value: 2,
//   },
// });
// console.log(obj);

// const obj = {};

// Object.defineProperty(obj, 'a', {
//   value: 1,
// });
// Object.defineProperties(obj, {
//   a: {
//     value: 1,
//   },
//   b: {
//     value: 2,
//   },
// });

// console.log(obj);
// console.log(Object.getOwnPropertyNames(obj));

// const obj = Object();
// console.log(obj);

// class Test {
//   static toNumber() {
//     return 1;
//   }
// }
// Test.a = 1;

// const obj = new Test();
// console.log(obj);

var Test = (() => {
  function Test(a, b) {
    this.a = a;
    this.b = b;
  }

  Test.toNumber = function (value) {
    return Number(value);
  };

  Test.prototype.plus = function () {
    return Test.toNumber(this.a) + Test.toNumber(this.b);
  };

  Test.prototype.minus = function () {
    return Test.toNumber(this.a) - Test.toNumber(this.b);
  };

  return Test;
})();

// console.log(Test);
const obj = new Test('1', 2);
console.log(obj);
console.log(obj.plus());
