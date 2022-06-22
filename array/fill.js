// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.fill(0, 2, 4);
// const newArr = arr.fill(0);
// const newArr = arr.fill(0, 1, 4);

// console.log(newArr); // [1, 0, 0, 0, 5]
// console.log(arr);

// const obj = Array.prototype.fill.call({ length: 3 }, 4);
// console.log(obj);

function makeArrayLike(arr) {
  var obj = {
    length: arr.length,
    push: Array.prototype.push,
    splice: Array.prototype.splice,
  };

  for (var i = 0; i < arr.length; i++) {
    Array.prototype.fill.call(obj, arr[i], i, i + 1);
  }

  return obj;
}

var res = makeArrayLike([1, 2, 3, 4, 'a', 'b']);
console.log(res);
