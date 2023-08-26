// const arr1 = [1, 2, 3];
// const arr2 = [2, 1, 3];

// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// const obj = {
//   a: 1,
//   b: 2,
//   c: 2,
// };
const obj = {};
Object.defineProperties(obj, {
  a: {
    value: 1,
    enumerable: true,
  },
  b: {
    value: 2,
    enumerable: true,
  },
  c: {
    value: 3,
    enumerable: true,
  },
  length: {
    value: 3,
    // enumerable: true,
  },
});

// const keys = Object.keys(obj);
// getOwnPropertyNames 枚举不可被枚举的属性
// const keys = Object.getOwnPropertyNames(obj);
// console.log(keys);

// for (var i = 0; i < keys.length; i++) {
//   console.log(obj[keys[i]]);
// }

// for (var key in obj) {
//   console.log(obj[key]);
// }
function forIn(obj, callback) {
  const keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    typeof callback === 'function' && callback(keys[i], obj);
  }
}

// forIn(obj, function (key, obj) {
//   console.log(key, obj[key]);
// });

var obj1 = {
  a: 1,
  b: 2,
  c: {
    value: 3,
  },
};
Object.prototype.forInObj = function (callback) {
  var obj = this;
  let res = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if ({}.toString.call(obj[key]) === '[object Object]') {
        res = [key, obj[key].value];
      } else {
        res = [key, obj[key]];
      }
      typeof callback === 'function' && callback.apply(obj, res);
    }
  }
};

// obj1.forInObj(function (key, value) {
//   console.log(this);
//   console.log(key, value);
// });

// var arr = [1, 2, 3];
// for (var item of arr) {
//   console.log(item);
// }
// console.log(arr);

function* generation(iterable) {
  for (var i = 0; i < iterable.length; i++) {
    yield iterable[i];
  }
}

function myGeneration(iterable) {
  let nextIndex = 0;

  function next() {
    return nextIndex < iterable.length
      ? { value: iterable[nextIndex++], done: false }
      : { value: undefined, done: true };
  }

  return {
    next,
  };
}

// var result = generation([1, 2, 3]);
var result = myGeneration([1, 2, 3]);
// console.log(result);
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

Object.prototype[Symbol.iterator] = function values() {
  var obj = Object(this);
  var nextIndex = 0;
  var keys = Object.keys(obj);

  function next() {
    return nextIndex < keys.length
      ? { value: [keys[nextIndex], obj[keys[nextIndex++]]], done: false }
      : { value: undefined, done: true };
  }

  return {
    next,
  };
};

var obj2 = {
  a: 1,
  b: 2,
};
for (var [key, value] of obj2) {
  console.log(key, value);
}
// console.log(Object.prototype);

/**
 * forEach 循环每一个
 * map 映射,对数组的每一项进行加工,并返回一个新的的数组
 * filter 过滤满足条件的,并返回一个新的数组
 * reduce
 * reduceRight
 * every
 * some
 */
var arr = [1, 2, 3];
arr.forEach(
  function (item, index, array) {
    array[index] = this.a;
  },
  { a: 1 }
);
console.log(arr);
