// var arr1 = [1, 2, 3];
// console.log(arr1); // [1,2,3]
// var arr2 = [4, 5, 6];
// console.log(arr2); // [4,5,6]
// var arr3 = arr1.concat(arr2);
// console.log(arr3); // [1,2,3,4,5,6]

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// var arr1 = arr.slice(1, 3);
// console.log(arr1);

// var arr = [1,2,3,4]
// var str1 = arr.join('')
// var str2 = arr.join(',')
// console.log(str1); // 1234
// console.log(str2); // 1,2,3,4

// function test() {
//   console.log(arguments);
// }

// test(1, 2, 3, 4, 5);

// var obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 2,
//   push: Array.prototype.push,
//   splice: Array.prototype.splice,
// };
// obj.push(4);
// obj.push(5);
// obj.splice(0, 1);

// console.log(obj);

// Array.prototype.myUnshift = function () {
//   for (var i = 0; i < arguments.length; i++) {
//     this.splice(i, 0, arguments[i]);
//   }
//   return this.length;
// };
// Array.prototype.myPop = function () {
//   return this.splice(this.length - 1, 1)[0];
// };
// Array.prototype.myShift = function () {
//   return this.splice(0, 1)[0];
// };

// var arr = [1, 2, 3];
// console.log(arr.myUnshift(4, 5, 6));
// console.log(arr);
// console.log(arr.myPop());
// console.log(arr);

// console.log(arr.myShift());
// console.log(arr);

function test() {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments));
}

Array.prototype.myUnshift = function () {
  var argArr = Array.prototype.slice.call(arguments);
  return argArr.concat(this);
};

// test(1, 2, 3, 4, 5);
var arr = [1, 2, 3, 4];
console.log(arr.myUnshift(5));
