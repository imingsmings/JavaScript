const arr = [1, 2, 3, [4, 5, [6]]];

const newArr = arr.flat();

console.log(newArr); // [1, 2, 3, 4, 5, [6]]
console.log(newArr === arr); // false

// 浅扁平化实现
function shallowFlat1(arr) {
  return arr.reduce(function (prev, current) {
    return prev.concat(current);
  }, []);
}

function shallowFlat2(arr) {
  return [].concat(...arr);
}

// 深度扁平化
// reduce concat isArray 递归
Array.prototype.deepFlat1 = function () {
  var _this = this;
  var deep = arguments[0] !== Infinity ? arguments[0] >>> 0 : Infinity;
  return deep > 0
    ? _this.reduce(function (prev, current) {
        return prev.concat(
          Array.isArray(current) ? current.deepFlat(deep - 1) : current
        );
      }, [])
    : _this;
};

// forEach isArray push 递归
Array.prototype.deepFlat2 = function () {
  var _this = this;
  var deep = arguments[0] !== Infinity ? arguments[0] >>> 0 : Infinity;
  var res = [];

  (function _(arr, deep) {
    arr.forEach(function (item) {
      if (Array.isArray(item) && deep > 0) {
        _(item, deep - 1);
      } else {
        res.push(item);
      }
    });
  })(_this, deep);

  return res;
};

// for of isArray push 去除empty
Array.prototype.deepFlat3 = function () {
  var _this = this;
  var deep = arguments[0] !== Infinity ? arguments[0] >>> 0 : Infinity;
  var res = [];

  (function _(arr, deep) {
    for (var item of arr) {
      if (Array.isArray(item) && deep > 0) {
        _(item, deep - 1);
      } else {
        item !== void 0 && res.push(item);
      }
    }
  })(_this, deep);

  return res;
};

// stack pop unshift/push
Array.prototype.deepFlat4 = function () {
  var _this = this;
  var deep = arguments[0] !== Infinity ? arguments[0] >>> 0 : Infinity;
  var res = [];
  var stack = [..._this];

  while (stack.length) {
    var lastItem = stack.pop();
    if (Array.isArray(lastItem) && deep > 0) {
      stack.push(...lastItem);
      deep--;
    } else {
      res.unshift(lastItem);
    }
  }

  return res;
};

/// 生成器
function* deepFlat(arr) {
  for (var item of arr) {
    if (Array.isArray(item)) {
      yield* deepFlat(item);
    } else {
      yield item;
    }
  }
}

const otherArr = [1, 2, 3, [4, 5, [6, 7]]];

// console.log(shallowFlat(otherArr));
// console.log(deepFlat(otherArr));
// console.log(otherArr.deepFlat(1));
console.log([...deepFlat(otherArr, 2)]);
