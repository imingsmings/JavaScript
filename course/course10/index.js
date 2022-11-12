// function Car() {}

// Car.prototype = {
//   constructor: Car,
//   color: 'primary',
// };

// var car = new Car();
// car.brand = 'BYD';
// console.log(car.brand);
// console.log(Car.__proto__.brand);
// console.log(car);

// function Teacher() {
//   this.course = {
//     chinese: 99,
//     math: 100,
//   };
//   this.students = 100;
// }

// function Student() {}

// var teacher = new Teacher();
// Student.prototype = teacher;
// Student.prototype.constructor = Student;

// var student = new Student();
// student.pe = 92;
// student.course.eng = 98;
// student.course.chinese = 97;
// student.students++;

// console.log(student);

// function Obj() {}

// var o1 = new Obj();
// var o2 = Object.create(Object.prototype);

// console.log(o1);
// console.log(o2);

// var o1 = Object.create(null);
// o1.num = 1;
// console.log(o1);

// var o2 = Object.create(o1);
// console.log(o2);

Object.myCreate = function (_prototype) {
  var _obj = new Object();

  if (typeof _prototype !== 'object' && typeof _prototype !== 'function') {
    throw new Error(
      'Object prototype may only be an Object or null: ' + _prototype
    );
  }

  _obj.__proto__ = _prototype;

  return _obj;
};

// console.log(Object.myCreate({}));
// console.log(Object.create();

// var obj = Object.create(null);
// obj.toString = function () {
//   return Object.prototype.toString.call(this);
// };
// console.log(obj.toString());

var num = 1;
console.log(num.toString());

var fun = function () {};

function test() {
  console.log(this);
}

test.call({ a: 1 });
