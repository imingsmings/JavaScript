// interface PingPong {
//     ping(): void
// }

// type PingPong = {
//     ping(): void
// }

// class Sonar implements PingPong {
//     ping() {
//         console.log('ping!');
//     }
// }

// Class 'Ball' incorrectly implements interface 'PingPong'.
// class Ball implements PingPong {
//     pong() {

//     }
// }

// interface AA {
//     a(): void
// }

// interface BB {
//     b(): void
// }

// class C implements AA, BB {
//     a(): void {

//     }

//     b(): void {

//     }
// }

// interface checkable {
//     check(name: string): boolean
// }

// class NameChecker implements checkable {
//     // Parameter 'name' implicitly has an 'any' type.
//     // It's NOT string type
//     check(name): boolean {
//         return name === 'admin'
//     }
// }

// interface AA {
//     x: number;
//     y?: number;
// }

// class C implements AA {
//     x: number = 0;
// }

// const oo = new C();
// oo.y = 1

// class Animal {
//     name: string = '';

//     constructor(name: string) {
//         this.name = name
//     }
    
//     move() {
//         console.log('move');
//     }
// }

// class Dog extends Animal {
//     age: number;

//     constructor(name: string, age: number) {
//         super(name)
//         this.age = age
//     }

//     bark() {
//         console.log('bark');
//     }
// }

// const dd = new Dog('dog', 2);
// console.log(dd);
// dd.bark();
// dd.move();

// class Base {
//     greet() {
//         console.log('hello');
//     }
// }

// class Derived extends Base {
//     greet(name?: string) {
//         if (name === undefined) {
//             super.greet()
//         } else {
//             console.log(`hello ${name.toUpperCase()}`);
//         }
//     }
// }

// const ds = new Derived();
// ds.greet();
// ds.greet("ts");

// const dds: Base = ds
// dds.greet()

// class Base {
//     greet() {
//       console.log("Hello, world!");
//     }
//  }
   
// class Derived extends Base {
    // Property 'greet' in type 'Derived' is not assignable 
    // to the same property in base type 'Base'.
    // greet(name: string) {
    //   console.log(`Hello, ${name.toUpperCase()}`);
    // }
// }

// (() => {
//     interface Animal {
//         dateOfBirth: any;
//     }
    
//     interface Dog extends Animal {
//         breed: any;
//     }
    
//     class AnimalHouse {
//         resident: Animal;
        
//         constructor(animal: Animal) {
//             this.resident = animal;
//         }
//     }
    
//     class DogHouse extends AnimalHouse {
//         declare resident: Dog;
//         constructor(dog: Dog) {
//             super(dog);
//         }
//     }
    
//     const dh = new DogHouse({
//         dateOfBirth: new Date(),
//         breed: 'dalmatian'
//     });

//     console.log(dh.constructor);
    
// })()

// class Base {
//     name = 'base'
//     constructor() {
//         console.log('base name', this.name);
        
//     }
// }

// class Derived extends Base {
//     name = 'derived'
// }

// new Derived() // base name base

// class Parent {
//     name: string;
//     constructor() {
//        this.name = 'Parent'
//     }
// }

// class Child extends Parent {
//     declare name: string;
//     constructor() {
//         super()
//         return {
//             name: 'Child'
//         }
//     }
// }

// const res = new Child()
// console.log(res);

class MsgError extends Error {
    constructor(m: string) {
      super(m);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, MsgError.prototype);
    }
    sayHello() {
      console.log("hello " + this.message);
    }
}


const err = new MsgError('error message')
// console.log(typeof err);
err.sayHello()
