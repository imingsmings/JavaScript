// class Greeter {
//     public greet() {
//         console.log("Hello, world!");
//     }
// }

// const greeter = new Greeter();
// greeter.greet();

// class Greeter {
//     public greet() {
//         console.log("Hello, world!");
//     }

//     protected getName() {
//         return 'Tom';
//     }
// }

// class SubGreeter extends Greeter {
//     public howdy() {
//         // it's OK to access protected member here
//         console.log("Howdy, " + this.getName());
//     }
// }

// const greeter = new SubGreeter();
// greeter.greet();
// greeter.howdy();
// Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
// greeter.getName();

// class Base {
//     protected m = 10;
// }

// class Derived extends Base {
//     m = 15;
// }

// const dd = new Derived();
// console.log(dd.m); // 15

// class Base {
//     protected m = 1;
// }

// class Derived1 extends Base {
//     protected m = 2;
// }

// class Derived2 extends Base {
    // Property 'm' is protected and only accessible within class 'Derived1' and its subclasses.
//     f1(other: Derived1) {
//         other.m = 10;
//     }

//     f2(other: Derived2) {
//         other.m = 20;
//     }
// }

// class Base {
//     private x = 1;
// }

// class Derived extends Base {
//     getX() {
        // Property 'x' is private and only accessible within class 'Base'.
//         return this.x;
//     }
// }

// const px = new Base();
// Property 'x' is private and only accessible within class 'Base'.
// console.log(px.x);

// class Base {
//     private x = 1;
// }

// class Derived extends Base {
//     x = 10;
// }

// class AA {
//     private x = 1;

//     public sameAs(other: AA) {
//         return other.x === this.x;
//     }
// }

// class MySafe {
//     private secretKey = 1
// }

/*
var MySafe = (function () {
    function MySafe() {
        this.secretKey = 1;
    }
    return MySafe;
}());

const s = new MySafe()
console.log(s.secretKey)
*/

// class MySafe {
//     private secretKey = 1
// }

// const s = new MySafe()
// console.log(s['secretKey']);

// class MySafe {
//     #secretKey = 1
// }

// class MySafe {
//     #secretKey = 1
// }

// class Base {
//     static x = 0;

//     static printX() {
//         console.log(Base.x);
//     }
// }

// console.log(Base.x);
// Base.printX();

// class Base {
//     private static x = 0;

//     static printX() {
//         console.log(Base.x);
//     }
// }

// // Property 'x' is private and only accessible within class 'Base'.
// console.log(Base.x);
// Base.printX();

// class Base {
//     static x = 0
//     static getGreeting() {
//         return 'hello world'
//     }
// }

// class Derived extends Base {

// }

// console.log(Derived.getGreeting()); // hello world

// class S {
    // Static property 'name' conflicts with built-in property 
    // 'Function.name' of constructor function 'S'.
    // static name = 'name is S'
// }

// class Base {
//     static x = 0
//     static getGreeting() {
//         return 'hello world'
//     }
// }
    

// class Base {
//     private static num: number;

//     constructor() {
//         console.log('constructor');
//     }

//     get count() {
//         return Base.num
//     }

//     static {
//         console.log('static block');
//         Base.num =  Math.random() > 0.2 ? 1 : 2
//     }
// }

// const bb = new Base()
// console.log(bb.count);



