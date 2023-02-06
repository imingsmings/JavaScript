// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(1, 1)); // false

// console.log(Array.prototype.includes.call(1, 'a')); // false
// console.log([].includes.call(true, 'a')); // false
// console.log([].includes.call({ 0: 'a', length: 1 }, 'a')); // true
Array.prototype.myIncludes = function (value) {
  if (this == null) {
    throw new Error('"this" is null or not defined');
  }

  var fromIndex = arguments[1];
  var obj = Object(this);
  var len = obj.length >>> 0;

  fromIndex = fromIndex | 0;

  fromIndex = Math.max(fromIndex >= 0 ? fromIndex : this.length + fromIndex, 0);

  while (fromIndex < len) {
    if (obj[fromIndex] === value) {
      return true;
    }

    fromIndex++;
  }

  return false;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.myIncludes(1)); // false
