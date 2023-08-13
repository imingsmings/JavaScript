// interface Pet {
//     name: string;
// }

// class Dog { 
//     name: string;
// }

// let pet: Pet;
// // OK, because of structural typing
// pet = new Dog();

// interface Pet {
//     name: string;
// }

// let pet: Pet;
// let dog1 = { name: 'Lassie', owner: "Rudd Weatherman" };

// pet = dog1

// interface Pet {
//     name: string;
// }

// let dog1 = { name: 'Lassie', owner: "Rudd Weatherman" };

// function printPet(pet: Pet) {
//     console.log("The pet's name is " + pet.name);
// }

// printPet(dog1); // OK

// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

// y = x; // OK
// Target signature provides too few arguments. Expected 2 or more, but got 1.
// x = y;

// let x1 = () => ({name: "Alice"});
// let y1 = () => ({name: "Alice", location: "Seattle"});

// x1 = y1; // OK
// because x() lacks a location property
// y1 = x1;

// enum EventType { 
//     Mouse, 
//     Keyboard 
// }

// interface Event {
//     timestamp: number;
// }

// interface MyMouseEvent extends Event {
//     x: number;
//     y: number;
// }

// interface MyKeyEvent extends Event {
//     keyCode: number
// }

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
// }

// Type 'Event' is missing the following properties from type 'MyMouseEvent': x, y
// listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));

// listenEvent(EventType.Mouse, (e: Event) =>
//   console.log((e as MyMouseEvent).x + "," + (e as MyMouseEvent).y)
// );

// listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
//   console.log(e.x + "," + e.y)) as (e: Event) => void);

// Type 'Event' is not assignable to type 'number'.
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

// function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
    // callback(args);
// }

// Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ", " + y));

// Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

// enum Status { 
//     Ready,
//     Waiting 
// };

// enum Color {
//     Red,
//     Blue,
//     Green
// }

// let color = Color.Red;
// let num = 1;
// // num = color; // ok
// color = num; // ok

// let status1 = Status.Ready;
// status1 = 2
// Type 'Color.Green' is not assignable to type 'Status'.
// status1 = Color.Green;  //error

// class Animal1 { 
//     feet: number;
//     static fn() {}
//     constructor(name:string, numFeet: number) {
//         this.feet = numFeet;
//      }
// }

// class Size {
//     feet: number;
//     private pNum: number;
//     constructor(numFeet: number) {
//         this.feet = numFeet;
//         this.pNum = numFeet;
//      }
// }

// let aaa: Animal1 = new Animal1("name", 4);
// let sss: Size = new Size(1);

// // aaa = sss;  //OK
// sss = aaa;  //OK

// class X {
//     private x: number = 1;
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Y {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// let xx: X = new X("X");
// let yy: Y = new Y("Y");

// Property 'x' is missing in type 'Y' but required in type 'X'.
// xx = yy
// yy = xx

// interface Empty1<T> {}
// let xx: Empty1<number> = {};
// let yy: Empty1<string> = {};

// xx = yy;

// interface Empty1<T> {
//     data: T;
// }
// let xx: Empty1<number> = {
//     data: 1
// };
// let yy: Empty1<string> = {
//     data: "1"
// };

// xx = yy;

// let identity = function <T>(x: T): T {
//     // ...
//     return x;
// };
// let reverse = function <U>(y: U): U {
//     // ...
//     return y;
// };

// identity = reverse;