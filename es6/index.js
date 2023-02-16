// const arr = [1, 2, 3, 4, 5];

/**
 * Array.of 替代通过Array(length)的声明数组的方式
 */
// const result = Array.of(...arr);
// console.log(result);

/**
 * arrayLike -> 数组、类数组
 * mapFu -> Array.prototype.map
 * Array.from(arrayLike, mapFu, thisArg)
 */
// const result = Array.from(
//   arr,
//   function (item, index) {
//     console.log(item, index);
//     return item * index * this.a;
//   },
//   {
//     a: 2,
//   }
// );
// console.log(result);

const obj = {
  a: 1,
  b: 2,
};
console.log(Object.keys(obj));

const arr = [1, 2, 3];
console.log(arr.keys());
