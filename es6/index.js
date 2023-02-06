/**
 * 若有默认值,形参与实参的映射关系不存在
 */
// function test(a, b, c = 2) {
//   console.log(arguments.length);
// }
// test(1);
// console.log(test.length);

// function foo({ x, y }) {
//   console.log(x, y);
// }
// foo(undefined);

// var x = 1;
// function foo(
//   x,
//   y = function () {
//     var x = 2; // 修改foo的第一个参数
// var x = 2;
// let x = 3;
//     console.log(x);
//   }
// ) {
// var x = 3;
//   y();
//   console.log(x);
// }

// foo();
// console.log(x);

function foo() {
  return (a) => {
    console.log(this.a);
  };
}

var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2);
