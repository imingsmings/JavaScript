// 对象枚举

// ------------------------------------------
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ------------------------------------------

// ------------------------------------------
// var phone = {
//   brand: 'Apple',
//   color: 'grey',
//   price: 9999,
// };
// ------------------------------------------

// ------------------------------------------
// for (var key in phone) {
//   car.key -> car['key'] -> undefined
//   console.log(phone.key); // undefined
//   console.log(phone[key]);
// }
// ------------------------------------------

// ------------------------------------------
// var arr = [1, 2, 3, 4, 5];
// for (var i in arr) {
//   console.log(arr[i]);
// }
// ------------------------------------------

// ------------------------------------------
// var obj = {
//   name: 'wxm',
//   age: 32,
// };
// for (var key in obj) {
//   hasOwnProperty 判断是否是自身的属性，不包含原型上的
//   if (obj.hasOwnProperty(key)) {
//     console.log(obj[key]);
//   }
// }
// ------------------------------------------

// ------------------------------------------
// function Car() {}
// var car = new Car();
// console.log(car instanceof Car); // true
// console.log(car instanceof Object); // true
// console.log([] instanceof Array); // true
// console.log([] instanceof Object); // true
// console.log({} instanceof Object); // true
// ------------------------------------------

// ------------------------------------------
// var a = [];
// console.log(a.constructor);
// console.log(a instanceof Array);
// console.log(Object.prototype.toString.call(a));
// console.log(a.toString());
// ------------------------------------------
