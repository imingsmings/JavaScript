// function calculator(a, b, type, callback) {
//   let res = 0;
//   let sign = '+';

//   switch (type) {
//     case 'PLUS':
//       res = a + b;
//       sign = '+';
//       break;
//     case 'MINUS':
//       res = a - b;
//       sign = '-';
//       break;
//     default:
//       res = a + b;
//       sign = '+';
//       break;
//   }

//   if (callback && typeof callback === 'function') {
//     callback(a, b, sign, res);
//   }
// }

// calculator(1, 2, 'PLUS', function (a, b, sign, res) {
//   console.log(`${a} ${sign} ${b} = ${res}`);
// });

// $.ajax('http://localhost:3000/getData', {
//   success(data) {
//     console.log(data);
//   },
// });

// const data = $.ajax('http://localhost:3000/getData', {
//   async: false,
// }).responseJSON;

// console.log(data);
// console.log(123);

// const p = new Promise((resolve, reject) => {
//   $.ajax('http://localhost:3000/getData', {
//     success(data) {
//       resolve(data);
//     },
//   });
// });

// p.then((result) => {
//   console.log(result);
// });

// function getData() {
//   return new Promise((resolve, reject) => {
//     $.ajax('http://localhost:3000/getData', {
//       success(data) {
//         resolve(data);
//       },
//     });
//   });
// }

// async function getInfo() {
//   const data = await getData();
//   console.log(data);
// }

// getInfo();

// console.log(123);
