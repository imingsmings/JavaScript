/**
 * 进程: 系统进行资源分配和调度的基本单元。
 * 多进行: 多个进程可以一起来执行多个任务。
 * 单线程: 进程内的一个独立单元,可调度的执行单元,
 *        同一进程中的线程可共享进程的资源,同一时间只能做一件事。
 * 多线程: 多个线程可执行多个任务。
 *
 * 工厂(进程) -> 工人(线程) -> 多个工人(多线程) -> 独立 -> 协同
 *
 * 浏览器: 多进程
 *  browser进程、插件进程、GPU进程、渲染引擎进程(浏览器内核)
 * 浏览器渲染引擎进程: 多线程
 *  1. JS引擎线程(解析JS代码) --> DOM冲突
 *  2. GUI线程(渲染用户界面) 与互斥
 *  3. HTTP网络请求线程
 *  4. 定时器触发线程  Web APIs
 *  5. 浏览器事件处理线程
 *
 * 数据量大解决方案: SSR(服务端渲染) WebWorker
 *
 * JS异步: 通过事件驱动来模拟多线程,本质是单线程
 *
 * JS异步代码:   宏任务      微任务
 *            宏任务队列  微任务队列(优先级更好)
 *
 * Promise: 解决异步的管理问题
 */

/**
 * Promise
 * executor 同步执行
 * 异步操作状态: 进行中    成功    失败
 *            pending fulfilled reject
 * 状态不可逆: 状态一旦改变不可逆
 *  promise一旦固化以后,再对promise对象添加回调,可以直接拿到这个结果
 *  如果是事件,一旦错过,就是真的错过了
 *
 * resolve/reject 改变promise的状态
 * then()若无参数,则会忽略
 * 状态固化之后无法捕获
 */
// console.log(
//   new Promise(function (resolve, reject) {
//     console.log('executor');
//   })
// );

// const promise = new Promise((resolve, reject) => {
//   console.log('ok');
//   resolve('ok');
//   console.log(a);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(promise);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('fail'));
//   }, 3000);
// });

// 一个promise依赖另一个promise导致当前的promise状态无效
// 其状态由另一个promise决定
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(p1);
//   });
// });

// p2.then(() => {}).catch((error) => {
//   console.log(error);
// });

// const p1 = new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// });
// p1.then((res) => {
//   console.log(res);
// });
// console.log(3);

/**
 * Promise.all
 * Promise.race
 * Promise.any
 */

// const obj = {
//   then: function (resolve, reject) {
//     resolve(42);
//   },
// };

// const p = Promise.resolve(obj);
// // console.log(p);
// p.then((value) => {
//   console.log(value);
// });

const fs = require('node:fs');

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}

const readFile = promisify(fs.readFile);

readFile('./data/name.txt', 'utf-8')
  .then((result) => {})
  .catch((error) => {
    console.log('error: ', error);
  });
