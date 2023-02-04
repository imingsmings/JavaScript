/**
 * 函数声明会提升到当前作用域的顶端,不会越级提升
 *
 * 顶层对象
 */
// {
//   let a = 1;
//   {
//     console.log(a);
//     function a() {}
//   }
//   console.log(a);
// }

// const a = 12;
// console.log(a);

// const obj = {};
// Object.freeze(obj);
// obj.name = 'Tom';
// console.log(obj);

function myFreeze(obj) {
  Object.freeze(obj);

  for (var k in obj) {
    if (typeof (obj[k] === 'object') && typeof (obj[k] !== null)) {
      Object.freeze(obj[k]);
    }
  }
}

const obj = {
  info: {
    age: 12,
    name: 'Tom',
  },
  _id: 1,
};

myFreeze(obj);
// obj.info.a = 1; 报错
