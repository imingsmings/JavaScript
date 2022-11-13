// // var obj = {
// //   a: 1,
// // };

// var obj1 = Object.create({});
// obj1.a = 1;

// var obj2 = Object.create(obj1);
// obj2.b = 2;

// console.log(obj2.a);
// // console.log(obj2.__proto__); // undefined

// var visitor = {
//   goToChina: function () {
//     console.log('Go to China');
//     return this;
//   },
//   goToRussia: function () {
//     console.log('Go to Russia');
//     return this;
//   },
//   goToParis: function () {
//     console.log('Go to Paris');
//     return this;
//   },
// };

// visitor.goToChina().goToParis().goToRussia();

// var programLang = {
//   No1: 'JavaScript',
//   No2: 'Go',
//   info: function (num) {
//     console.log(this['No' + num]);
//   },
// };

// programLang.info(1);

// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function Car() {
//   this.brand = 'Benz';
//   this.color = 'red';
// }

// Car.prototype.width = 2.5;

// var car = new Car();

// for (var key in car) {
//   if (car.hasOwnProperty(key)) {
//     console.log(car[key]);
//   }
// }

// var trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
// delete trees[3];
// console.log(trees);
// console.log(3 in trees);

// var color = 'color';
// console.log('length' in color);

// function Teacher() {}
// function Student() {}
// Student.prototype = new Teacher();
// Student.prototype.constructor = Student;
// var stu = new Student();
// console.log(stu instanceof Student); // true
// console.log(stu instanceof Teacher); // true
// console.log(stu instanceof Object); // true

// console.log(1 instanceof Number);

// function test() {
//   console.log(this);
// }
// test();

// this.a = 1;
// console.log(a);

// function Test(a, b) {
//   this.a = a;
//   this.b = b;
//   //  Test { a : 1, b : 2 }
//   console.log(this);
// }

// new Test(1, 2);

// function Teacher(name, age) {
//   this.name = name;
//   this.age = age;
// }
// function Student(name, age, score) {
//   // 修改Teacher内部this为Student实例对象
//   Teacher.apply(this, [name, age]);
//   this.score = score;
// }

// new Student('Tom', 16, 99);

// var obj = {
//   a: 1,
//   fun: function () {
//     // this -> obj
//     console.log(this.a);
//   },
// };

// obj.fun();

// function test(a, b) {
//   console.log(arguments);
//   console.log(arguments.callee === test);
// }

// test(1, 2, 3);

// var res = (function (n) {
//   console.log(arguments);
//   if (n <= 1) {
//     return 1;
//   }
//   return n + arguments.callee(n - 1);
// })(10);
// console.log(res);

function test1() {
  console.log(test1.caller); // null
  test2();
}

function test2() {
  console.log(test2.caller); // test1
}

test1();
