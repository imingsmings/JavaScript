// var a = 1;
// let b = 2;
// console.log(this.a);
// console.log(this.b);

// var a = 1;
// console.log(this.a);

// function test() {
//   'use strict';
//   console.log(this);
// }
// window.test();

// var getGlobal = function () {
//   if (typeof window !== 'undefined') return window;
//   if (typeof global !== 'undefined') return global;
//   if (typeof self !== 'undefined') return self;
// };

// console.log(getGlobal());

// class Test {
//   constructor() {
//     // this.test = function () {
//     //   console.log(this);
//     // };
//   }
//   say() {}
//   test() {
//     console.log(this);
//   }
//   static do() {}
// }

// var Test = (function () {
//   function Test() {}
//   Test.prototype.say = function () {};
//   Test.do = function () {};
// })();
// const test = new Test();
// console.log(test);
// test.test();

// class Father {
//   constructor(age) {
//     this.age = age;
//   }
// }

// class Son extends Father {
// constructor() {
//   // 调用Father上的constructor
//   // 生成this的绑定 -> Father this -> Son的实例
//   // this -> new Father() -> {}
//   // Father.call(this)
//   super();
//   this.hobby = 'travel';
// }
// }

// const son = new Son(1);
// // son.study();
// console.log(son);

// function test() {
//   console.log(this);
// }

// var t1 = test.bind({ a: 1 });
// t1();
// var t2 = test.bind({ a: 2 });
// t1();

// var a = 2;
// const test = () => {
//   console.log(this.a);
// };

// new test();

// var obj = {
//   a: {
//     b: {
//       c: 2,
//     },
//     fn: function () {
//       console.log(this);
//       function t() {
//         console.log(this);
//       }
//       t();
//     },
//   },
// };

// obj.a.fn();

// var obj = {};
// Object.defineProperty(obj, 'a', {
//   get: function () {
//     // obj
//     console.log(this);
//     return 1;
//   },
// });

// console.log(obj.a);

// function Test() {
//   // Test {}
//   console.log(this);
// }

// new Test();

// var oBtn = document.querySelector('button');
// oBtn.addEventListener(
//   'click',
//   function () {
//     // <button>Click</button>
//     console.log(this);
//   },
//   false
// );

class Father {
  constructor(fruit) {
    this.fruit = fruit;
    this.eat = this.eat.bind(this);
  }

  eat() {
    console.log('I am eating an ' + this.fruit);
  }
}

class Son extends Father {
  constructor() {
    super('orange');
  }
}

var son = new Son();
var fa = new Father('apple');
son.eat = fa.eat;
son.eat();

console.log(son);
console.log(fa);
