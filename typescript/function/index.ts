// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
// }

// function print(s: string) {
//     console.log(s);
// }

// greeter(print)

// function greeter(fn: (string) => void) {
// }

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//     // do sth
// }

// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
// }

// function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
// }

// function myFunc(someArg: number): boolean {
//     return someArg > 10;
// }

// myFunc.description = "test";

// doSomething(myFunc);

// type SomeConstructor = {
//     new(s: string): object;
// }

// function fn(ctor: SomeConstructor) {
//     return new ctor("hello");
// }

// const obj = fn(Array);
// console.log(obj); // ['hello']

// interface CallOrConstruct { 
    // new(s: string): Date;
//     (n?: number): number;
// }

// type CallOrConstruct = { 
//     new(s: string): Date;
//     (): Date;
// }

// const MyDate: CallOrConstruct = class MyDate {
//     constructor(s: string) {
//         console.log(s);
//     }
// }

// const myDateInstance = new MyDate("2023-06-17");
// console.log(myDateInstance); // 输出日期对象

// interface CallOrConstruct {
//     new (s: string): Date;      // construct
//     (n?: number): number;       // call
//   }