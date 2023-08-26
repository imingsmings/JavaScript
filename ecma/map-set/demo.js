// var obj = { a: 1 };
// obj1 = obj;
// obj = null;
// console.log(obj1);

// const m = new Map();
// const obj = { a: 1 };
// m.set(obj, 1);
// console.log(m);

// const vm = new WeakMap();
// const obj = { a: 1 }; // 引用1次
// const obj2 = obj; // 引用2次
// vm.set(obj, 1); // 引用2次,WeakMap的key不计数

// var obj = {
//   a: 1,
//   b: 2,
// };

// var obj1 = {
//   b: 2,
//   a: 1,
// };

// const m = new Map();
// const obj = { a: 1 };
// m.set('a', 1);
// m.set(Symbol('a'), 2);
// m.set(obj, 3);
// m.set([1, 2], 4);
// m.set(function () {}, 5);

// +0 与 -0同值
// m.set(0, 6);
// m.set(NaN, 7);
// console.log(m);

// console.log(m.get('a'));
// console.log(m.get(obj));

// 接受一个二维数组
// const map = new Map([
//   ['a', 1],
//   ['b', 2],
// ]);

// console.log(map);

// const m = new Map();
// m.set('a', 1);
// m.a = 1;
// console.log(m);

// const m = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ]);

// for (let [k, v] of m) {
//   console.log(k, v);
// }
// console.log(m.values());
// console.log(m.keys());
// console.log(m.entries());

// const result = JSON.stringify(m, function (k, v) {
//   if (v instanceof Map) {
//     return {
//       type: 'Map',
//       value: Array.from(v.entries()),
//     };
//   } else {
//     return v;
//   }
// });

// {"type":"Map","value":[["a",1],["b",2],["c",3]]}
// console.log(result);

// const newMap = JSON.parse(result, function (k, v) {
//   if (typeof v === 'object' && v !== null) {
//     if (v.type === 'Map') {
//       return new Map(v.value);
//     }
//   }
//   return v;
// });
// console.log(newMap);

// const obj = {
//   a: 1,
//   b: 2,
// };

// for (let [k, v] of Object.entries(obj)) {
//   console.log(k, v);
// }

// const kvArray = [
//   ['key1', 'value1'],
//   ['key2', 'value2'],
// ];

// const myMap = new Map(kvArray);

// console.log(myMap.get('key1')); // "value1"

// console.log(Array.from(myMap));

// console.log([...myMap]);

// const maps = new Map([['a', 1]]);
// const arr = ['b', 2];
// const merged = new Map([...maps, arr]);
// console.log(merged);

// var obj1 = { a: 1 }; // 引用次数 +1
// var obj2 = obj1; // 引用次数 +1

// const vm = new WeakMap([[obj1, 1]]); // 引用次数 +0

// obj1 = null;
// obj2 = null;

// 对象的强引用的解除不是WeakMap做的,因此WeakMap的成员是不准确的
// WeakMap成员不稳定,遍历就不准确,size,entries,keys,values,clear不准确
// 存在 delete get set has方法

// WeakSet 元素必须是引用,且是弱引用,

// let obj = { a: 1 };
// const vm = new WeakMap([[obj, 1]]);
// obj = null;
// console.log(vm);
// let obj1 = { a: 2 };
// const vm = new WeakMap();
// const result = vm.set(obj, 1);
// const result = vm.delete(obj);
// console.log(result);s
// console.log(result === vm); // true
// console.log(vm);

// class ClearableWeakMap {
//   constructor(init) {
//     this._vm = new WeakMap(init);
//   }

//   set(key, value) {
//     this._vm.set(key, value);
//     return this;
//   }

//   get(key) {
//     return this._vm.get(key);
//   }

//   has(key) {
//     return this._vm.has(key);
//   }

//   delete(key) {
//     return this._vm.delete(key);
//   }

//   clear() {
//     this._vm = new WeakMap();
//   }
// }
// const obj = { a: 1 };
// const vm = new ClearableWeakMap();
// vm.set(obj, 123);
// vm.clear();
// console.log(vm);

// const s = new Set([+0, -0]);
// console.log(s);
// const arr = [1, 2, 3, 4, 5];
// const s = new Set(arr);
// s.add(6);
// console.log(s.has(1));
// s.delete(2);
// console.log(s);
// console.log(s.keys());
// for (const value of s.keys()) {
//   console.log(value);
// }
// for (const value of s.values()) {
//   console.log(value);
// }
// for (const value of s.entries()) {
//   console.log(value);
// }
// s.forEach((value, index, arg) => {
// console.log(value, index, arg);
// console.log(`${value},${index}`);
// });
// s.clear();

function execRecursively(fn, subject, _refs = new WeakSet()) {
  if (_refs.has(subject)) return;

  fn(subject);

  if (typeof subject === 'object') {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
  }
}

const foo = {
  foo: 'Foo',
  bar: {
    bar: 'Bar',
  },
};
foo.bar.baz = foo;

// execRecursively((obj) => console.log(obj), foo);

// number string undefined null boolean Symbol object function
// function deepClone(source, hash = new WeakMap()) {
function deepClone(source, hash = new WeakSet()) {
  if (
    typeof source !== 'object' ||
    typeof source === 'function' ||
    source === null
  ) {
    return source;
  }

  if (hash.has(source)) {
    return source;
  }

  if (source instanceof Date) {
    return new Date(source);
  }

  if (source instanceof RegExp) {
    return new RegExp(source);
  }

  const target = new source.constructor();
  hash.add(source);

  for (let key in source) {
    target[key] = deepClone(source[key], hash);
  }

  return target;
}

const obj = {
  a: 1,
  // b: { c: 2 },
  // list: [1, 2, 3],
  // fn: function () {
  //   console.log('fn');
  // },
};
// obj.b.d = obj;
const res = deepClone(obj);
// res.a = 666;
// res.b.c = 666;
// res.list.push(4);
console.log(obj);
console.log(res);
// console.log(obj.fn == res.fn);
