var arr = [1, 2, 3, 4, 3, 2, 1, 0, 4];

Array.prototype.unique = function () {
  var temp = {};
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    if (!temp.hasOwnProperty(this[i])) {
      temp[this[i]] = this[i];
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log(arr.unique());

var str = '111222000aabb111';

String.prototype.unique = function () {
  var temp = {};
  var newStr = '';
  for (var i = 0; i < this.length; i++) {
    if (!temp.hasOwnProperty(this[i])) {
      temp[this[i]] = this[i];
      newStr += this[i];
    }
  }
  return newStr;
};

console.log(str.unique());
