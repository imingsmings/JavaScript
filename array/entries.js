const arr = [1, 2, 3, 4, 5];
const it = arr.entries();

// console.log(it.next()); // {value: [0, 1], done: false}

// for (const [k, v] of it) {
//   console.log(k, v);
// }

// 二维数组排序
const arrs = [
  [56, 23],
  [56, 34, 100, 1],
  [123, 234, 12],
];

function sortArr(arr) {
  var _it = arr.entries();
  for (var [key, values] of _it) {
    values.sort((a, b) => a - b);
  }
  return arr;
}

// for (var i = 0; i < arr.length; i++) {
//   var _r = _it.next();
//   if (!_r.done) {
//     _r.value[1].sort((a, b) => a - b);
//   }
// }

// for (var i = 0; i < arr.length; i++) {
//   var _r = _it.next();
//   if (!_r.done) {
//     _r.value[1].sort((a, b) => a - b);
//   }
// }

console.log(sortArr(arrs));
