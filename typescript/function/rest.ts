// type fn<T> = {
//     (x:number, ...m: T[]): T[];
// }
// const multiply: fn<number> = function(x, ...m) {
//     return m.map((item) => {
//         return item * x;
//     })
// }

// const a = multiply(10, 1, 2, 3, 4);
// console.log(a);
  
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.push(...arr2);

// const args = [8, 5];
// A spread argument must either have a tuple type or be passed to a rest parameter.
// const angle = Math.atan2(...args);

// Inferred as 2-length tuple
// const args = [8, 5] as const;
// OK
// const angle = Math.atan2(...args);
// console.log(angle);

// interface User {
//     name: string;
//     age: number;
// }

// function getUserInfo({ name, age }: User) {
//     return `${name} is ${age} years old`;
// }

// type voidFn = () => void;

// const f1: voidFn = () => {
//     return true
// }

// console.log(f1());

// type voidFunc = () => void;
 
// const f1: voidFunc = () => {
//   return 1;
// };

// console.log(f1());

 
// const f2: voidFunc = () => true;
 
// const f3: voidFunc = function () {
//   return true;
// };

// console.log(f1()); // true
// console.log(f2()); // true
// console.log(f3()); // true

// const v1 = f1();
 
// const v2 = f2();
 
// const v3 = f3();

// Type 'boolean' is not assignable to type 'void'.
// function f2(): void {
    // return true;
// }

// function test() {
//     console.log(this);
// }
// test.call({})

// const obj = { 
//     fn() {
//         console.log(this);
//     }
// }

// obj.fn.call({})

// const a = obj.fn;

// a()

function fn(this: Date, ...args: number[]) {
    console.log(this.getFullYear());
    console.log(args);
    
}

fn.call(new Date(), 1, 2, 3)
fn.apply(new Date(), [1, 2, 3])
const newFn = fn.bind(new Date(), 1, 2, 3);
newFn()