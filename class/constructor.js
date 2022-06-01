// function Car() {
//   this.color = 'red';
// }

// var car = new Car()

// function Car(color, brand) {
//   var me = {};
//   me.color = color;
//   me.brand = brand;
//   return me;
// }

// var car = Car('red', 'BYD');
// console.log(car);

// var a = 1;
// a.len = 3;

// var a = 123;
// a.len = 3;
// console.log(a.len); // undefined

// var str = 'abcd';
// // new String(str).length
// console.log(str.length)

// var name = 'lamguiji';
// name += 10;

// var type = typeof name;
// if (type.length === 6) {
//   type.text = 'string';
// }

// console.log(type.text); // undefined

function Test(a, b, c) {
  var d = 1;
  this.a = a;
  this.b = b;
  this.c = c;

  function f() {
    d++;
    console.log(d);
  }

  this.g = f;
}

var test1 = new Test();
test1.g(); // 2
test1.g(); // 3
var test2 = new Test();
test2.g(); // 2

var x = 1,
  y = (z = 0);
function add(n) {
  return (n = n + 1);
}
y = add(x);
function add(n) {
  return (n = n + 3);
}
z = add(x);
console.log(x, y, z); // 1 4 4

function foo(x) {
  console.log(arguments);
  return x;
}
foo(1, 2, 3, 4, 5);

(function foo1(x) {
  console.log(arguments);
})(1, 2, 3, 4, 5);

function b(x, y, a) {
  a = 10;
  console.log(arguments[2]); // 10
}

b(1, 2, 3);

function getStringBits(str) {
  var len = str.length;
  var bits = 0;
  for (var i = 0; i < len; i++) {
    if (str.charCodeAt(i) <= 255) {
      bits += 1;
    } else {
      bits += 2;
    }
  }
  return bits;
}

var result = getStringBits('wxm中国');
console.log(result);
