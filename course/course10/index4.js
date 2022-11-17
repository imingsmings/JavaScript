// if语句
// var a = 5;
// if (a > 0) {
//   console.log('大于0');
// } else {
//   console.log('小于等于0');
// }

// 三元运算
// a > 0 ? console.log('大于0') : console.log('小于等于0');

// 三目运算符具有返回值
// var a = 5,
//   str = '';

// str = a > 0 ? '大于0' : '小于等于0';

// console.log(str); // '大于0'

// var a = 5,
//   str = '';
// if (a > 0) {
//   if (a > 3) {
//     str = '大于3';
//   } else {
//     str = '小于等于3';
//   }
// } else {
//   str = '小于等于0';
// }

// str = a > 0 ? (a > 3 ? '大于3' : '小于等于3') : '小于等于0';

// console.log(str); // 大于3

var obj = {
  name: 'Tom',
  age: 18,
  score: {
    chinese: 98,
    math: 99,
  },
  date: new Date('1994-10-25 00:00:00'),
};

// var obj1 = obj;
// obj1.name = 'Tim';
// console.log(obj.name); // Tim

// var obj2 = {};

// function clone(origin, target) {
//   for (var key in origin) {
//     target[key] = origin[key];
//   }
// }

// clone(obj1, obj2);
// console.log(obj2);

function deepClone(origin, target) {
  // var target = target || {};
  // for (var key in origin) {
  //   var originValue = origin[key];
  //   if (originValue instanceof Object) {
  //     var subTarget = new originValue.constructor();
  //     target[key] = subTarget;
  //     deepClone(originValue, subTarget);
  //   } else {
  //     target[key] = originValue;
  //   }
  // }
  // return target;

  if (origin == null || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  var target = new origin.constructor();

  for (var key in origin) {
    if (origin.hasOwnProperty(key)) {
      target[key] = deepClone(origin[key]);
    }
  }

  return target;
}

var newObj = deepClone(obj);
console.log(obj);
console.log(newObj); // false
