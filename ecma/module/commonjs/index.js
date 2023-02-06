// var moduleA = require('./module/module_a.js');
var { a, num: num1 } = require('./module/module_a.js');
var moduleB = require('./module/module_b.js');
var moduleC = require('./module/module_c.js');

// console.log(moduleA.a);
console.log(a);
console.log(num1);
console.log(moduleB.b);
console.log(moduleC.c);
