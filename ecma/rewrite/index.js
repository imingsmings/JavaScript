import modules from './utils.js';

const { myNew } = modules;

function Test(a, b) {
  this.a = a;
  this.b = b;
}

// const res = new Test(1, 2);
// console.log(res);
var res = myNew(Test, 1, 2);
console.log(res);

var res1 = new Test(1, 2);
console.log(res1);
