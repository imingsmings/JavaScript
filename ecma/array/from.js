const arr = [1, 2, 3, 4, 5];
// const arr = '12345'
// const arr = {
//   0: 0,
//   1: 1,
//   2: 2,
//   length: 3,
// };
// const arr = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ]);
// const arr = new Set([1, 2, 3, 4]);

// const newArr = Array.from(arr);
const newArr = Array.from(arr, function (item) {
  return item + 1;
});
const newArr1 = Array.from(arr).map(function (item) {
  return item + 1;
});

console.log(newArr);
console.log(newArr1);

console.log(Array.from.length);

function range(start, end, step) {
  return Array.from(
    { length: (end - start) / step + 1 },
    function (item, index) {
      return start + index * step;
    }
  );
}

console.log(range(1, 10, 3));
