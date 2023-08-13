// // 函数由于抛出错误, 无法正常结束返回
// function error1(message: string): never {
//   throw new Error(message);
// }

// error1('Something went wrong');

// // 死循环, 无法正常结束返回
// function infiniteLoop(): never {
//   while (true) {}
// }

// let x: never = 1 as never;
// console.log(x);

let strOrNum: string | number = 'hello';

if (typeof strOrNum === 'string') {
  console.log(strOrNum.length);
} else if (typeof strOrNum === 'number') {
  console.log(Number(strOrNum).toFixed(2));
} else {
  // 类型被缩小为 never 类型，因为在之前的类型保护中已经排除了所有可能的类型
  const unreachable: never = strOrNum;
}
