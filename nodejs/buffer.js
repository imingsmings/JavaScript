const { Buffer } = require('node:buffer');

// const buf = Buffer.alloc(4, 'a', 'utf-8');
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'utf-8');
const buf1 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf);
console.log(buf1);

console.log(Array);
