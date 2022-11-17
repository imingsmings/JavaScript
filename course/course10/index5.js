// var arr = new Array(3);
// console.log(arr);

// arr = new Array(null);
// console.log(arr);

// arr = new Array(3, 2, 1, undefined, null, true, {});
// console.log(arr);
// var arr = [];
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(Array.__proto__ === Function.prototype); // true
// var arr = [, 1, 3, 5, , , 7];
// console.log(arr);

/*
{
  0: 1,
  1: 2,
  2: 3
}
*/
// var arr = [1, 2, 3];
// arr.length = 'abcd';
// arr.push(5);

// console.log(arr);
var arr = [-1, 3, -9, 10, 200];
arr.sort(function (x, y) {
  console.log(x, y);
  // 3 -1
  // -9 3
  // -9 3
  // -9 -1
  // 10 -1
  // 10 3
  // 200 3
  // 200 10
  return x - y;
});
console.log(arr);

// var obj = {
//   0: 1,
//   1: 2,
//   length: 2,
// };
// console.log(obj);

function test() {
  console.log(arguments);
  // arguments.callee(3, 4);
}
test(1, 2);

var obj = {
  1: 2,
  2: 3,
  length: 2,
  // 继承数组原型方法
  push: Array.prototype.push,
};
obj.push(4);
obj.push(5);
console.log(obj);
