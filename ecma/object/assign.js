/**
1. Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
2. Object.assign(target, ...sources)
3. Object.assign()是浅拷贝
4. 继承属性和不可枚举属性是不能拷贝的
5. 原始类型会被包装为对象(只有字符串的包装对象才可能有自身可枚举属性)
6. 异常会打断后续拷贝任务
7. 拷贝访问器将拷贝getter函数的返回值
 */

// 基本使用
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj === copy); // false

// 合并对象
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const o = Object.assign(o1, o2, o3);
console.log(o); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }
console.log(o === o1); // true

// 合并具有相同属性的对象
const o4 = { a: 4, b: 5, c: 6 };
const o5 = { b: 5, c: 6 };
const o6 = { c: 6 };
const oo = Object.assign({}, o6, o5, o4);
console.log(oo); // {a: 4, b: 5, c: 6}

// 拷贝访问器
const o7 = {
  foo: 1,
  get bar() {
    return 2;
  },
};
const ooo = Object.assign({}, o7);
console.log(ooo); // {foo: 1, bar: 2}

// 实现Object.assign()
Object.myAssign = (target, ...sources) => {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  const results = Object(target);
  for (let index = 0; index < sources.length; index++) {
    let currentSource = sources[index];
    if (currentSource !== null && currentSource !== undefined) {
      for (let key in currentSource) {
        if (Object.prototype.hasOwnProperty.call(currentSource, key)) {
          results[key] = currentSource[key];
        }
      }
    }
  }
  return results;
};
console.log(Object.myAssign({ id: 1 }, { name: 2, age: 23 }, { id: 5 }));
console.log(Object.myAssign(5, { id: 1, age: 45 }, { name: 6 }));

// 拷贝所有自有属性的属性描述符
const completeAssign = (target, ...sources) => {
  sources.forEach((source) => {
    const keys = Object.keys(source);
    const descriptors = keys.reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // 可枚举的Symbols
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
};

const o8 = {
  id: 1,
  name: 2,
  get boo() {
    return 3;
  },
  [Symbol('bar')]: 4,
};
const oooo = completeAssign({}, o8);
console.log(oooo); // {boo: 3, id: 1,name: 2,Symbol(bar): 4}
