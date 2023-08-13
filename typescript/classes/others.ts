// interface ILength {
//     length: number;
// }

// class Box<T extends ILength> {
//     value: T;

//     constructor(value: T) {
//         this.value = value
//     }
// }


// const box1 = new Box({
//     length: 10,
//     name: 'box1'
// });

// { value: { length: 10, name: 'box1' } }
// console.log(box1);

// class Box<T> {
    //  Static members cannot reference class type parameters.
//     static defaultValue: T;
// }

// class Base {
//     public name: string = 'base';

//     getName = (): string => {
//         return this.name;
//     }
// }

// const bb = new Base();
// const { getName } = bb;
// console.log(getName()); // base

// TypeScript input with 'this' parameter
// function fn(this: SomeType, x: number) {
//     /* ... */
// }

// // JavaScript output
// function fn(x) {
//     /* ... */
// }

// class Base {
//     public name: string = 'base';

//     getName(this: Base): string {
//         return this.name;
//     }
// }

// const bb = new Base();
// console.log(bb.getName()); // base 

// const gg = bb.getName
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'Base'.
// console.log(gg());

// class Base {
//     contents: string = '';
//     // (method) Base.set(value: string): this
//     set(value: string) {
//         this.contents = value;
//         return this;
//     }
// }

// class Derived extends Base {
//     clear() {
//         this.contents = '';
//     }
// }

// const bb = new Base();
// const rr = bb.set('hello'); // Base

// const dd = new Derived();
// const re = dd.set('hello'); // Derived

// class Base {
//     content: string = '';
//     // this -> Base Instance
//     sameAs(other: this) {
//         return other.content === this.content;
//     }
// }

// class Derived extends Base {
//     otherContent: string = '';

    // this -> Derived Instance
    // sameAs(other: this) {
    //     return other.content === this.content;
    // }
// }

// const bb = new Base();
// const dd = new Derived();
// Argument of type 'Base' is not assignable to parameter of type 'Derived'.
// dd.sameAs(bb); // Error

// class Animal {
//     isDog(): this is Dog {
//       return this instanceof Dog;
//     }
//   }
  
// class Dog extends Animal {
//     bark() {
//       console.log("Woof woof!");
//     }
// }
  
// class Cat extends Animal {
//     meow() {
//       console.log("Meow!");
//     }
// }
  
// const dd = new Dog();
// const cc = new Cat();

// if (dd.isDog()) {
//   dd.bark(); 
// }

// if (cc.isDog()) {
//   cc.bark(); 
// }

// class Params {
//     constructor(
//         public readonly x: number,
//         protected y: number,
//         private z: number,
//     ) {
//         // No body necessary
//         /**
//          * 自动执行了以下代码
//          *  this.x = x;
//          *  this.y = y;
//          *  this.z = z;
//          */
//     }
// }

// const params = new Params(1, 2, 3);
// console.log(params.x); // 1
// console.log(params.y); // error
// console.log(params.z); // error

// const Base = class <T> {
//     content: T;
//     constructor(value: T) {
//         this.content = value;
//     }
// }

// new Base('hello')
// new Base<number>(1)

// class Base <T>{
//     content: T;
//     constructor(value: T) {
//         this.content = value;
//     }
// }

// const baseClass = Base;

// new baseClass('hello'); // hello

// abstract class Base <T>{
//     abstract value: T;
//     abstract getName(): T;
//     abstract setName(value: T): void;
// }

// class Derived<T> extends Base<T> {
//     value: T;
//     constructor(value: T) {
//         super()
//         this.value = value;
//     }
//     getName(): T {
//         return this.value;
//     }
// }

// const dd = new Derived(1);
// console.log(dd.getName()); // 1

// abstract class Base { }
// class Derived extends Base {}

// function greet(ctor: new () => Base) {
//     return new ctor();
// }

// greet(Derived);
// Argument of type 'typeof Base' is not assignable to 
// parameter of type 'new () => Base'.
// greet(Base);

// class Point1 {
//     x: number = 0;
//     y: number = 0;
// }

// class Point2 {
//     x: number = 0;
//     y: number = 0;
// }

// const p1: Point1 = new Point2();

// class Person {
//     name: string;
//     age: number;
// }

// class Employee {
//     name: string;
//     age: number;
//     salary: number;
// }

// const p: Person = new Employee();

class Empty {}

function fun(arg: Empty) {
}

fun({ x: 1, y: 2 });
fun({});