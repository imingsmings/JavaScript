// let a : number = 1;

// Type 'string' is not assignable to type 'number'.
// a = 'abc'

// let a: number
// let a = 1;

// (parameter) item: number
// [1, 2, 3].map((item) => item + 1)

// let a: any
// let a;
// a = 1

// 1. any类型可以赋值给任何类型
// let a : number;
// let b: any = 'abc';
// a = b

// 2.可以访问任何属性
// let obj: any = {
//     a: 1
// }
// console.log(obj.b);

// 3. 可进行属性的追加
// let obj: any = {
//     a: 1
// }
// obj.b = 2

// 4. 其它类型可赋值给any类型
// let a;
// let b = 1;
// a = b

// 5. 隐式any在严格模式下是不被允许的
// function plus(a, b) {
//     return a + b
// }

// plus(1, 2)