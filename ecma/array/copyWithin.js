// es6
/**
 * target start end
 * 1. 3 ~ 4 [3,4)
 * 2. target 从...
 * 3. end > len - 1 取到末尾
 * 4. target > len - 1 不发生任何替换
 * 5. target > start 正常替换
 * 6. start或end是负数，正常替换
 * 7. 如果没有start 其整个数组的元素
 * 8. copyWithin不改变数组长度
 * 9. 若数组元素是引用值，则是浅拷贝
 */

// var arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 2, 4);
// console.log(arr);

var arr = [1, 2, 3, 4, 5];
var newArr = arr.copyWithin(1, 3);
console.log(arr);
console.log(newArr);
console.log(arr === newArr); // true

var obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
};

var newObj = Array.prototype.copyWithin.call(obj, 0, 2, 4);
console.log(newObj); // {0: 3, 1: 4, 2: 3, 3: 4, 4: 5, length: 5}
console.log(obj === newObj); // true
