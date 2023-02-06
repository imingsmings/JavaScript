// var arr = [1, 3, 4, 2, 4, 2, 7, 1, 2, 4, 9, 0];

// 双循环
// function uniqueArray(array) {
//   var _arr = [];
//   var isRepeat = true;

//   for (var i = 0; i < array.length; i++) {
//     isRepeat = false;
//     for (var j = 0; j < _arr.length; j++) {
//       if (_arr[j] === array[i]) {
//         isRepeat = true;
//         break;
//       }
//     }
//     if (!isRepeat) {
//       _arr.push(array[i]);
//     }
//   }
//   return _arr;
// }

// function uniqueArray(array) {
//   var _arr = [];
//   var isRepeat = true;

//   for (var i = 0; i < array.length; i++) {
//     isRepeat = false;
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         isRepeat = true;
//         break;
//       }
//     }
//     if (!isRepeat) {
//       _arr.push(array[i]);
//     }
//   }
//   return _arr;
// }

// filter结合indexOf
// function uniqueArray(array) {
//   return array.filter(function (item, index) {
//     return array.indexOf(item) === index;
//   });
// }

// forEach结合indexOf
// function uniqueArray(array) {
//   var _arr = [];
//   array.forEach(function (item) {
//     if (_arr.indexOf(item) === -1) {
//       _arr.push(item);
//     }
//   });
//   return _arr;
// }

// function uniqueArray(array) {
//   var _arr = [];
//   array.sort();
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] !== array[i + 1]) {
//       _arr.push(array[i]);
//     }
//   }
//   return _arr;
// }

// function uniqueArray(array) {
//   var _arr = [];
//   array.forEach(function (item) {
//     if (!_arr.includes(item)) {
//       _arr.push(item);
//     }
//   });
//   return _arr;
// }

// function uniqueArray(array) {
//   return array.sort().reduce(function (prev, item) {
//     if (prev.length === 0 || prev[prev.length - 1] !== item) {
//       prev.push(item);
//     }
//     return prev;
//   }, []);
// }

// function uniqueArray(array) {
//   var _arr = [];
//   var _map = new Map();

//   for (var i = 0; i < array.length; i++) {
//     if (!_map.get(array[i])) {
//       _map.set(array[i], 1);
//       _arr.push(array[i]);
//     }
//   }
//   return _arr;
// }

// function uniqueArray(array) {
//   return Array.from(new Set(array))
// }

// console.log(uniqueArray(arr));

function uniqueArray(array) {
  return Array.from(new Set(array));
}

var arr = [[1, 2, 3], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
var res = arr.flat(Infinity);
var newArr = uniqueArray(res);
console.log(newArr.sort((a, b) => a - b));
