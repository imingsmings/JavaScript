var arr = [[1, 2, 3], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function _isArray(obj) {
  return {}.toString.call(obj) === '[object Array]';
}

// function flatten(arr) {
//   var _arr = arr || [];
//   var fArr = [];
//   var len = _arr.length;
//   var item;

//   for (var i = 0; i < len; i++) {
//     item = _arr[i];
//     if (_isArray(item)) {
//       fArr = fArr.concat(flatten(item));
//     } else {
//       fArr.push(item);
//     }
//   }

//   return fArr;
// }

Array.prototype.flatten = function () {
  var _arr = this;
  var toString = Object.prototype.toString;

  if (toString.call(_arr) !== '[object Array]') {
    throw new TypeError('It must be an array');
  }

  return _arr.reduce(function (prev, item) {
    return prev.concat(
      toString.call(item) === '[object Array]' ? item.flatten() : item
    );
  }, []);
};

// console.log(flatten(arr));
console.log(arr.flatten());
