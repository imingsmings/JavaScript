// try {
//   throw 55;
// } catch (e) {
//   if (e <= 45) {
//     console.log(e);
//   } else {
//     throw e;
//   }
// }

// try {
//   throw 'hello';
// } catch (e) {
//   console.log(e);
// }

// try {
//   console.log(a);
// } catch (e if e instanceof TypeError) {
//   console.log('TypeError',e);
// } catch (e if e instanceof ReferenceError) {
//   console.log('ReferenceError',e);
// } catch (e) {
//   console.log(e);
// }

// try {
//   console.log(a);
// } catch (e) {
//   if (e instanceof TypeError) {
//     console.log('TypeError:', e);
//   } else if (e instanceof ReferenceError) {
//     console.log('ReferenceError:', e.message);
//   } else {
//     console.log(e);
//   }
// }
// try {
//   try {
//     throw '123';
//   } catch (e) {
//     console.log('inner:', e);
//     throw '456';
//   }
// } catch (e) {
//   console.log('outer:', e);
// }

// function test() {
//   try {
//     try {
//       throw '123';
//     } catch (e) {
//       console.log('inner:', e);
//       throw '456';
//     } finally {
//       return '789';
//     }
//   } catch (e) {
//     console.log('outer:', e);
//   }
// }

// var result = test();
// console.log(result); // 789

// try {
//   throw new Error('Shif', { cause: 'Spell error' });
// } catch (e) {
//   console.log(e.name, e.message, e.cause);
// }

// const e = new Error('Shif', { cause: { code: 404, msg: 'Spell error' } });

// try {
//   throw e;
// } catch (e) {
//   console.log(e.name, e.message, e.cause);
// }

// try {
//   try {
//     console.log(a);
//   } catch (e) {
//     console.log(e.name, e.message);
//     console.log(e.toString());
//     throw new Error('New error message', { cause: e });
//   }
// } catch (e) {
//   console.log(e.cause);
// }

// const e = new Error('Shif', { cause: 'Spell error' });

// try {
//   throw e;
// } catch (e) {
//   // Error Shif Spell error
//   console.log(e.toString());
//   console.log(e.name, e.message, e.cause);
// }

// let a;
// console.log(a);
// try {
//   test();
// } catch (e) {
//   console.log(e);
// }

// try {
//   throw new ReferenceError('ref error', { cause: 'manual' });
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.cause);
// }
// var 1ab = 666;
// new = 5
// function 1test(){}

// try {
//   // eval('hoo bar');
//   throw new SyntaxError('syntax error', { cause: 'manual' });
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.cause);
// }

// const num = 100;
// num = 1;

// console.log();
// function test(list) {
//   return list.push(1);
// }
// test('abc');
// const num = 666;
// num = 1;
// var obj = {};
// console.log(obj.a.toString());
// console.log('a' / 1);
// null.f();

// try {
//   null.f();
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
// }
// const arr = [1, 2, 4, 8];
// arr.length = -1;

// console.log(Number.prototype.toFixed(-1));

// try {
//   const arr = [1, 2, 4, 8];
//   arr.length = -1;
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
// }

// try {
//   decodeURI('https://www.baidu.com/#/login?&name=%');
// } catch (e) {
//   // URIError
//   console.log(e.name);
//   // URI malformed
//   console.log(e.message);
// }

// eval('var a = 1; console.log(a); test()');
// try {
//   throw new EvalError('eval error', { cause: 'manual' });
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.cause);
// }

class MyError extends Error {
  constructor(...args) {
    super(...args);
    this.name = MyError.name;
  }
}

const err = new MyError('hello', { cause: 'world' });
// console.log(err.name); // MyError
// console.log(err.message); // hello
// console.log(err.cause); // world

try {
  throw new MyError('custom error', { cause: 'manual' });
} catch (e) {
  console.log(e.name); // MyError
  console.log(e.message); // custom error
  console.log(e.cause); // manual
}
