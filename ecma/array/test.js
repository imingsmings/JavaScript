// var arr1 = [];
// var arr2 = new Array();
// var arr3 = Array();

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// var arr = [1, , 2];
// console.log(arr);
// console.log(arr[1]); // undefined

// var arr = [1, 2, 3];
// console.log(arr.length); // 3

// arr.push(4);
// arr.unshift(0);
// console.log(arr.length);
// console.log(arr);

// var arr = [1, 2, 3];
// Array.prototype.myPush = function () {
//   for (var i = 0; i < arguments.length; i++) {
//     arr[arr.length] = arguments[i];
//   }
//   return arr.length;
// };
// console.log(arr.myPush(4, 5));

// var arr = [1, 2, 3];
// console.log(arr.pop()); // 3
// console.log(arr.shift()); // 1
// console.log(arr); // [1,2]

// var arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// var arr = [1, 2, 3];
// Array.prototype.myUnshift = function () {
//   for (var i = 0; i < arguments.length; i++) {
//     arr.splice(0, 0, arguments[i]);
//   }
// };
// arr.myUnshift(4, 5, 6);
// console.log(arr);

// var arr = [1, 2, 3];
// var res = arr.splice(0, 1, 0);
// console.log(res);
// console.log(arr);

var arr = [-1, 3, -9, 10, 200];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr); // [-9, -1, 3, 10, 200]

arr.sort(function (a, b) {
  return Math.random() - 0.5 > 0 ? 1 : -1;
});

console.log(arr);
