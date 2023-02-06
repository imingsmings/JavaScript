const arr = ['123', '456', '789'];

// 期望得到 => ['1','2','3','4','5','6','7','8','9']

// map flat
const newArr1 = arr
  .map(function (item) {
    return item.split('');
  })
  .flat();
console.log(newArr1);

// flatMap
// 效率高一些
const newArr2 = arr.flatMap(function (item) {
  return item.split('');
});
console.log(newArr2);

const a = [5, 4, -3, 20, 17, -33, -4, 18];
// 移除a中的负数，并将基数变成n - 1, 1的形式
const res = a.flatMap(function (item) {
  return item < 0 ? [] : item % 2 === 0 ? [item] : [item - 1, 1];
});
console.log(res);

Array.prototype.myFlatMap = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  var arr = this;
  var _this = arguments[1];
  var res = [];
  var item = null;

  for (var i = 0; i < arr.length; i++) {
    item = callback.apply(_this, [arr[i], i, arr]);
    item && res.push(item);
  }

  return res.flat(1);
};

const newArr3 = arr.myFlatMap(function (item) {
  return item.split('');
});
console.log(newArr3);

const nums = [1, 2, 3, 4];

// const newNums = nums.flatMap(function (item) {
//   return [item, item * 2];
// });
const newNums = nums.reduce(function (prev, item) {
  return prev.concat([item, item * 2]);
}, []);
console.log(newNums);
