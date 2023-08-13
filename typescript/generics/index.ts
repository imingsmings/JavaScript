// function identity(arg: number): number {
//     return arg;
// }

// function identity(arg: string): string {
//     return arg;
// }

// function identity(arg: any): any {
//     return arg;
// }

// function identity<Type>(arg: Type): Type {
    // return arg;
// }

// console.log(identity<string>("hello world"));

// const output = identity<string>("hello world");

// function logLength<Type>(arg: Type): Type {
    // Property 'length' does not exist on type 'Type'.
    // console.log(arg.length);
    // return arg;
// }

// function loggingIdentity<Type>(arg: Type[]): Type[] {
//   console.log(arg.length);
//   return arg;
// }

// function logLength<Type>(arg: Array<Type>): Array<Type> {
//   console.log(arg.length);
//   return arg;
// }

// function identity<Type>(arg: Type): Type {
//   return arg;
// }
 
// let myIdentity: <Type>(arg: Type) => Type = identity;

// function identity<Input>(arg: Input): Input {
//   return arg;
// }

// type IdentityFunc = {
//   <Input>(arg: Input): Input;
// }

// const myFn: IdentityFunc = identity;

// interface IdentityFunc {
//   <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// const myFn: IdentityFunc = identity;

// interface GenericIdentityFunc<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// const myFn: GenericIdentityFunc<number> = identity;

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
//   console.log(arg.length);
//   return arg;
// }

// loggingIdentity({ length: 10, value: 3 });
// loggingIdentity("hello world");
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// loggingIdentity(3)

// function getProperty<Type, Key extends keyof Type>(obj:Type, key:Key) {
//   return obj[key];
// }

// const obj = {
//   a: 1,
//   b: 2,
// }

// Key is "a" | "b"
// getProperty(obj, 'a');
// Argument of type '"m"' is not assignable to parameter of type '"a" | "b"'.
// getProperty(obj, 'm');

// function processArray<T = number>(arg: T[]): T[] {
//   return arg;
// }

// const numbers: number[] = [1, 2, 3, 4];
// const strings: string[] = ['a', 'b', 'c'];

// processArray(numbers);
// processArray(strings);

// interface Container<T, U> {
//   (arg: T): U;
// }

// function fn<T, U>(arg1: T, arg2: U): Container<T, U> {
//   return (arg: T) => arg2;
// }

// interface Container<T, U> {
//   element: T;
//   children: U;
// }

// function create<T extends HTMLElement, U extends HTMLElement>(
//   element: T,
//   children: U[]
// ): Container<T, U[]>;

// function create<T extends HTMLElement, U extends HTMLElement>(
//   element: T,
//   children: U
// ){
//   return {
//     element:
//     children,
//   }
// }

// function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
//   element?: T,
//   children?: U
// ): Container<T, U>;

// function create<T, U>(element?: T, children?: U) {
//   // 
//   return {
//     element: null,
//     children: [],
//   };
// }

// function foo<T = string>(arg: T): void {
//   console.log(arg);
// }

// foo("Hello");
// foo<number>(42);
// foo(32);

// function foo<T, U = string>(arg1: T, arg2?: U): void {
//   console.log(arg1, arg2);
// }

// foo("Hello");
// // Argument of type 'string' is not assignable to parameter of type 'number'.
// foo<number>("Hello");
// foo<string, number>("Hello", 42);

// interface Lengthwise {
//   length: number;
// }

// function foo<T extends Lengthwise = string>(arg: T): void {
//   console.log(arg.length);
// }

// foo("Hello");
// // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// foo(42);
// foo({ length: 5 });

// function foo<T, U = string>(arg1: T, arg2: U): void {
//   console.log(arg1, arg2);
// }

// foo<number>(42, 'hello'); 
// foo("Hello", 42);

function foo<T = string>(arg: T): void {
  console.log(arg);
}

foo("Hello");

