// number string boolean object function undefined
function myTypeof(value) {
  var type = typeof value;
  var toString = Object.prototype.toString;
  var res = {
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Number]': 'object number',
    '[object String]': 'object string',
    '[object Boolean]': 'object boolean',
  };
  if (value === null) {
    return 'null';
  } else if (type === 'object') {
    var ret = toString.call(value);
    return res[ret];
  } else {
    return type;
  }
}

console.log(myTypeof(1));
