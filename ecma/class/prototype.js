// function Handphone() {}
// var phone = new Handphone();
// console.log(phone.__proto__);
// console.log(Handphone.prototype);

// function Test() {}
// Test.prototype.name = 'prototype';
// var test = new Test();
// console.log(test.name);
// console.log(test.constructor === test.__proto__.constructor);

// function Car() {}

// Car.prototype.name = 'Benz';

// var car = new Car();
// console.log(car.__proto__);
// console.log(Car.prototype);
// console.log(Car.prototype === car.__proto__); // true

// function Person() {}
// Person.prototype.name = '张三';
// var p1 = {
//   name: '李四',
// };
// var person = new Person();
// person.__proto__ = p1;
// console.log(person);

// function test() {
//   var a = 1;
//   function plus() {
//     a++;
//     console.log(a);
//   }
//   return plus;
// }
// var plus = test();
// plus();
// plus();
// plus();
// window.plus();

// function Car() {}
// var car = new Car();
// console.log(Car.prototype);
// console.log(car);

// console.log(Object.prototype.toString());

// var obj1 = {};
// var obj2 = new Object();
// console.log(obj1);
// console.log(obj2);

// function Obj() {}
// var obj3 = new Obj();
// console.log(obj3);

// function Obj() {}

// var obj1 = Object.create(null);
// console.log(obj1); // {}

// var num = 1;
// console.log(num.toString());

// var num = 1;
// var obj = {};
// var obj1 = Object.create(null);
// document.write(num);
// document.write(obj);
// document.write(obj1); // 报错

// function Person() {}
// Person.prototype.name = 'wxm';
// var p = new Person();
// console.log(p);

// function Professor() {}
// Professor.prototype = {
//   name: 'WXM',
//   tSkill: 'Java',
// };
// var professor = new Professor();

// function Teacher() {
//   this.name = 'wxm1';
//   this.mSkill = 'JS';
// }
// Teacher.prototype = professor;
// var teacher = new Teacher();
// console.log(teacher);

function Teacher() {
  this.name = 'wxm';
  this.tSkill = 'C++';
}

Teacher.prototype = {
  pSkill: 'JS',
};

var t = new Teacher();
console.log(t);

function Student() {
  this.name = 'wxm1';
}

function Buffer() {}
Buffer.prototype = Teacher.prototype;

var b = new Buffer();
Student.prototype = b;
Student.prototype.age = 12;

var s = new Student();
console.log(s);
