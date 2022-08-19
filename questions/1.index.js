/**
 * 自定义是一个对象，得到如下结果:
 * obj * 2 -> 246
 * 3 + obj -> 3default
 * String(obj) -> str
 */

// var obj = {
//   _step: 0,
//   toString() {
//     if (this._step === 0) {
//       this._step++;
//       return 123;
//     }

//     if (this._step === 1) {
//       this._step++;
//       return 'default';
//     }

//     if (this._step === 2) {
//       this._step++;
//       return 'str';
//     }
//   },
// };

var obj = {
  [Symbol.toPrimitive](type) {
    switch (type) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
    }
  },
};

// console.log(obj * 2);
// console.log(Number(obj) + 3);
// console.log(String(obj));
// console.log(obj - 2);
// console.log(2 + obj);
// console.log(obj - 2);
// console.log(obj / 2);
// console.log(obj + 2);
console.log(obj * 2);
