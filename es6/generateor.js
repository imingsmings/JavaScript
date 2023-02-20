/**
 * yield
 *  暂停函数执行,带有记忆功能
 *  产出不同内部的值,暂停函数运行
 *  yield默认不产出值,可理解为无返回值
 *  for...of迭代
 *  蛇形传值方式
 */
// ----------------------------------------------------------------------------
const fs = require('fs');

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

function* read() {
  const v1 = yield readFile('./data/name.txt', 'utf-8');
  const v2 = yield readFile('./data/' + v1, 'utf-8');
  // console.log(v2);
}

// const it = read();
// const { value, done } = it.next();
// value.then((result) => {
//   const { value, done } = it.next(result);
//   value.then((res) => {
//     console.log(res);
//   });
// });

function Co(it) {
  return new Promise((resolve, reject) => {
    let final = '';
    const _next = (data) => {
      const { value, done } = it.next(data);
      if (done) {
        resolve(final);
      } else {
        value.then((val) => {
          final = val;
          _next(val);
        });
      }
    };
    _next();
  });
}

const p = Co(read());
p.then((value) => {
  console.log('value', value);
});

// ----------------------------------------------------------------------------
// function* foo() {
//   let v1 = yield 1;
//   console.log('v1', v1); // one

//   let v2 = yield 2;
//   console.log('v1', v2); // two

//   let v3 = yield 3;
//   console.log('v1', v3);

//   let v4 = yield 4;
//   console.log('v1', v4);
// }

// const it = foo();
// console.log(it.next('one'));
// console.log(it.next('two'));

// ----------------------------------------------------------------------------
// function* demo() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// for (const value of demo()) {
//   console.log(value);
// }

// ----------------------------------------------------------------------------
// function* demo() {
//   foo(yield 'a', yield 'b');
// }

// function foo(a, b) {
//   console.log(a, b);
// }

// const it = demo();
// console.log(it.next()); // { value: 'a', done: false }
// console.log(it.next()); // { value: 'b', done: false }
// ------------------------ foo执行 undefined undefined
// console.log(it.next()); // { value: undefine, done: true}

// ----------------------------------------------------------------------------
// function* demo() {
//   console.log('hello' + (yield 3));
// }

// const it = demo();
// console.log(it.next()); // { value: 3, done: false }
// -----------------------  helloundefined
// console.log(it.next()); // { value: undefined, done: true}

// ----------------------------------------------------------------------------
// function* test() {
//   console.log(0);
//   yield 'a';
//   console.log(1);
//   yield 'b';
//   console.log(2);
//   yield 'c';
//   console.log(3);
//   return 'd';
// }

// const it = test();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
