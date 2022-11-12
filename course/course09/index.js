// function Car() {}
// function Bus() {}
// Bus.prototype.name = '12';

// Car.prototype.name = 'Benz';
// Car.prototype.drive = function () {};

// // Car.prototype = {
// //   name: 'Benz',
// //   drive: function () {},
// // };

// var car = new Car();
// car.__proto__ = Bus.prototype;
// console.log(car);
// console.log(Car.prototype === car.__proto__); // true
// console.log(car.name);

// Car.prototype.name = 'Benz';
// function Car() {}
// var car = new Car();
// Car.prototype = {
//   name: 'BYD',
// };
// console.log(car);
/**
 * 在实例化之前,Car构造函数中 prototype 指向 {name: 'Benz'} 对象
 * 在实例化之后,car的__proto__指向 prototype
 * 给prototype重新赋值后,只是修改了造函数的prototype指向
 * 并不会影响实例对象car的__proto指向
 */

// var add = (function () {
//   var a = 1;
//   function add() {
//     a++;
//   }
//   return add;
// })();

// add();

// (function () {
//   var b = 1;
//   function minus() {
//     b--;
//     console.log(b);
//   }
//   window.minus = minus;
// })();

// minus();
