// function Car() {}
// var car = new Car();
// console.log(Car.prototype);
// console.log(car);

// function Teacher(name, age, course) {
//   this.name = name;
//   this.age = age;
//   this.course = course;
// }

// Teacher.prototype.school = '清华大学';

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype = new Teacher();
// Student.prototype.constructor = Student;

// var stu = new Student('张三', 23);

// console.log(stu);

// function Teacher(course) {
//   this.course = course;
// }

// Teacher.prototype.school = '清华大学';

// function Student(name, age, course) {
//   Teacher.call(this, course);
//   this.name = name;
//   this.age = age;
// }

// var stu = new Student('Tom', 24, 'Math');
// console.log(stu);
// console.log(stu.school);

// function Teacher(course) {
//   this.course = course;
// }

// Teacher.prototype.school = '清华大学';

// function Student(name, age, course) {
//   Teacher.call(this, course);
//   this.name = name;
//   this.age = age;
// }

// // Student.prototype = Teacher.prototype;
// Student.prototype = new Teacher();
// Student.prototype.constructor = Student;

// Student.prototype.homeland = 'China';

// var stu = new Student('Tom', 24, 'Math');

// console.log(stu);
// console.log(Student.prototype);

// function Teacher(course) {
//   this.course = course;
// }
// Teacher.prototype.school = '北京大学';

// function Buffer() {}
// Buffer.prototype = Teacher.prototype;

// function Student(name, age, course) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype = new Buffer();
// Student.prototype.constructor = Student;

// var stu = new Student('Tom', 23);

// console.log(stu);
// console.log(Teacher.prototype);

function Teacher() {}
function Student() {}

// function inherit(Target, Origin) {
//   function Buffer() {}
//   Buffer.prototype = Origin.prototype;
//   Target.prototype = new Buffer();
//   Target.prototype.constructor = Target;
// }
var inherit = (function () {
  var Buffer = function () {};
  return function (Target, Origin) {
    Buffer.prototype = Origin.prototype;
    Target.prototype = new Buffer();
    Target.prototype.constructor = Target;
  };
})();

inherit(Student, Teacher);

var stu = new Student();
console.log(stu);
