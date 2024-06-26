// ------------------------------------------------------------------
/**
 * async await
 * 1. await 内置的执行器: co
 * 2. 更好的语义
 * 3. 更广的适用性
 * 4. 返回值一定是promise对象
 */

// ------------------------------------------------------------------
/**
 * try块之间正常捕获
 */
// const g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log(e);
//   }
// };

// const i = g();
// i.throw('a'); // 捕获不到错误
// console.log(i.next());
// i.throw('a'); // 捕获到错误
// console.log(i.next());
