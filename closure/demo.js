// var a = 1;

// function test() {
//   var b = 2;

//   function test2() {
//     // console.log(b);
//     console.log(a);
//   }
//   test2();
// }

// test();

// function test(a, b, type) {
//   function add() {
//     console.log(a + b);
//   }

//   function minus() {
//     console.log(a - b);
//   }

//   switch (type) {
//     case 'PLUS':
//       add();
//       break;
//     case 'MINUS':
//       minus();
//       break;
//     default:
//       break;
//   }
// }

// test(1, 2, 'PLUS');

// function test(initialValue) {
//   let num = initialValue;

//   function changeNum(value) {
//     num += value;
//   }

//   function add(value) {
//     changeNum(value);
//   }

//   function minus(value) {
//     changeNum(-value);
//   }

//   function getValue() {
//     return num;
//   }

//   return {
//     add,
//     minus,
//     getValue,
//   };
// }

// const t = test(1);

// t.add(5);
// console.log(t.getValue());

// function test() {
//   return function () {
//     return function () {
//       return function () {};
//     };
//   };
// }

// const oInput = document.querySelector('#textInput');
// oInput.addEventListener('input', throttle(handler, 800), false);

// function handler(e) {
//   console.log(this.value);
// }

// function throttle(handler, delay) {
//   const _delay = delay || 1000;
//   let _initialTime = Date.now();

//   return function (...args) {
//     const currentTime = Date.now();

//     if (currentTime - _initialTime >= _delay) {
//       handler.apply(this, args);
//       _initialTime = currentTime;
//     }
//   };
// }

// function test({ a, b, c }) {
//   let _a = a;
//   let _b = b;
//   let _c = c;

//   function testA() {
//     function setA(value) {
//       _a = value;
//     }
//     return {
//       // a: _a,
//       // setA,
//       get a() {
//         return _a;
//       },
//     };
//   }

//   return {
//     testA,
//   };
// }

// const { testA } = test({ a: 1, b: 2, c: 3 });
// const { a, setA } = testA();
// console.log(a);
// setA(2);
// console.log(a);

function UserInfo(info) {
  this.username = info.username;
  this.age = info.age;
  // this.setInfo = function
}

const userInfo = new UserInfo({
  username: 'Jason',
  age: 18,
});

console.log(userInfo);
