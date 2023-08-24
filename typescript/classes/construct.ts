// class Point {
//     x: number;
//     y: number;

//     constructor(x: number = 0, y: number = 0) {
//         this.x = x; 
//         this.y = y;
//     }
// }

// const pt = new Point();
// console.log(pt.x, pt.y); // 0 0

// const p1 = new Point(10, 20);
// console.log(p1.x, p1.y); // 10 20

// class Point {
//     x: number | string;
//     y?: number;

//     // overload declare
//     constructor(x: number, y: number);
//     constructor(s: string);

//     // implementation
//     constructor(xs: number | string, y?: number) {
//         if (typeof xs === 'number' && typeof y === 'number') {
//             this.x = xs;
//             this.y = y;
//         } else {
//             this.x = xs
//         }
//     } 
// }

// const pt = new Point(10, 20);
// console.log(pt);

// const p1 = new Point('hello');
// console.log(p1);

// class Base {
//     k = 100;
// }

// class Derived extends Base {
//     constructor() {
//         // 'super' must be called before accessing 'this' in the constructor of a derived class.
//         console.log(this.k);
//     }
// }

class MessageQueue {
    private messages: string[] = [];
    private constructor(messages: string[]) {
        this.messages = messages;
    }

    static create(messages: string[]) {
        return new MessageQueue(messages);
    }
}

// Constructor of class 'Base' is private and only accessible within the class declaration.
// new MessageQueue()

const queue = MessageQueue.create(['hello', 'world']);

// Cannot extend a class 'MessageQueue'. Class constructor is marked as private.
// class MyQueue extends MessageQueue {
//     constructor() {
//         super([]);
//     }
// }