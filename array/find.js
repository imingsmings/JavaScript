// const arr = [
//   { id: 1, name: '张三' },
//   { id: 2, name: '李四' },
// ];

// const item = arr.find(function (item) {
//   return item.id === 1;
// });

// console.log(item); // { id: 1, name: '张三' }
// console.log(item === arr[0]); // true

const arr = [1, , 3, , 5];
const item = arr.find((item) => {
  console.log('Gone');
  return false;
});

console.log(item);
