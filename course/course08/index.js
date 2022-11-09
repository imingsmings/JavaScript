// function test1() {
//   function test2() {
//     var b = 2;
//     console.log(a);
//   }
//   var a = 1;
//   return test2;
// }

// var test3 = test1();
// test3();

// var teacher = {
//   name: 'Tim',
//   age: 27,
//   smoke: function () {
//     console.log(this);
//   },
//   run: () => {
//     console.log(this);
//   },
// };

// teacher.smoke();
// teacher.run();

// var obj = new Object();
// console.log();

// function Test() {
//   this.numbers = [].slice.call(arguments);
// }

// Test.prototype.sum = function () {
//   var result = 0;

//   for (var i = 0; i < this.numbers.length; i++) {
//     result += this.numbers[i];
//   }

//   return result;
// };

// var test = new Test(1, 2, 3, 4, 5);
// console.log(test);
// console.log(test.sum());

// function createPerson(options) {
//   var obj = new Object();

//   obj.name = options.name;
//   obj.age = options.age;
//   obj.say = function () {
//     console.log('say');
//   };

//   return obj;
// }

// var p = createPerson({
//   name: 'Cook',
//   age: 24,
// });

// console.log(p);

// function Car(color, brand) {
//   this.color = color;
//   this.brand = brand;
//   return {};
// }

// var car = new Car('red', 'Benz');
// console.log(car);

// var a = 1;
// var b = new Number(a);
// console.log(b);
// console.log(b + 1);
// b.name = 'Tom';
// b.say = function () {
//   console.log('sya');
// };
// b.say();

// var a = 123;
// a.len = 3; // new Number(123).len = 3 -> 包装后无法保存 -> 删除 -> undefined
// console.log(a);

// var str = 'abc';
// str.length
// console.log(new String(str).length);

// var str = 'abc';
// str.length = 1;
// console.log(str);

// var names = 'languiji';
// names += 10;

// var type = typeof names;

// if (type.length === 6) {
//   type.text = 'string';
// }

// console.log(type.string);

// function Test(a, b, c) {
//   var d = 1;
//   this.a = a;
//   this.b = b;
//   this.c = c;

//   function f() {
//     d++;
//     console.log(d);
//   }

//   this.g = f;
// }

// var test1 = new Test();
// test1.g(); // 2
// test1.g(); // 3
// var test2 = new Test();
// test2.g(); // 2

// var x = 1,
//   y = (z = 0);

// function add(n) {
//   return (n = n + 1);
// }

// y = add(x);

// function add(n) {
//   return (n = n + 3);
// }

// z = add(x);

// console.log(x, y, z); // 1 4 4

// function foo(x) {
//   console.log(arguments);
//   return x;
// }

// foo(1, 2, 3, 4, 5);

// var str = 'a';
// var pos = str.charCodeAt(0);
// console.log(pos);

// var str = 'abcd%';
// function getBits(str) {
//   var res = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) > 255) {
//       res += 2;
//     } else {
//       res += 1;
//     }
//   }
//   return res;
// }
// console.log(getBits(str));
