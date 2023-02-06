// const arr = Array.of(3);
// console.log(arr);

// function getResult(a, b, callback) {
//   const result = a + b;
//   callback && callback(Array.of(a, b));
//   return result;
// }

// function callback(arr) {
//   console.log(arr);
// }

// const res = getResult(1, 2, callback);
// console.log(res);

const arr = Array.of(...[1, 2, 3]);
console.log(arr);
