var person1 = {
  name: '张三',
  age: 13,
  score: {
    chinese: 99,
    math: 100,
  },
};

var person2 = {};

// person1.score.english = 89;

// console.log(person1);
// console.log(person2);

function clone(origin, target) {
  var result = target || {};
  for (var key in origin) {
    result[key] = origin[key];
  }
  return result;
}

var res = clone(person1);
console.log(res);

// ---------------------------------------

var name = '222';
var a = {
  name: '111',
  say: function () {
    console.log(this.name);
  },
};

var fun = a.say;
fun(); // 222
a.say(); // 111

var b = {
  name: '333',
  say: function (fun) {
    fun();
  },
};
b.say(a.say); // 222
b.say = a.say;
b.say(); // 333

// -----------------------------------------
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); //  3
new new Foo().getName(); // 3

// var foo = new Foo();
// console.log(foo);
