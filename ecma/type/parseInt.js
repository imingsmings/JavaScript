console.log(parseInt('10')); // 10
console.log(parseInt('1a')); // 1
console.log(parseInt('a10')); // NaN
console.log(parseInt()); // NaN
console.log(parseInt('10', 1)); // NaN

var str = '-123';

function test(str, radix) {
  var newStr = '';
  var prefix = '';
  str = str.trim();

  if (str[0] === '-') {
    prefix = '-';
    str = str.slice(1);
  }
  for (var i = 0; i < str.length; i++) {
    var num = str[i];
    if (Number(num) > radix - 1 || Number.isNaN(Number(num)) || num === ' ') {
      newStr = str.slice(0, i);
      break;
    } else {
      newStr = str;
    }
  }

  var res = 0;
  var len = newStr.length;
  for (let i = 0; i < len; i++) {
    res += Number(newStr[i]) * Math.pow(radix, len - i - 1);
  }
  return Number(prefix + res);
}
console.log(test(str, 4));
console.log(parseInt(str, 4));
