// class Point { }

// class Point {
//     x: number;
//     y: number;
// }
   
// const pt = new Point();
// pt.x = 0;
// pt.y = 0;

// class Point {
//     // Member 'x' implicitly has an 'any' type, but a better type may be inferred from usage.
//     x;
//     y;
// }

// class Point {
//     x = 0;
//     y = 0;
// }

// const pt = new Point();
// console.log(pt.x, pt.y);
// pt.x = 'a'

// class Point {
//     // Property 'x' has no initializer and 
//     // is not definitely assigned in the constructor.
//     x: number;

//     constructor() {
//         this.x = 10;
//     }
// }

// class Point {
//     x!: number
// }

// class Point {
//     readonly x: number = 10;

//     constructor(x?: number) {
//         if (x !== undefined) {
//             this.x = x;
//         }
//     }

//     setX(x: number) {
//         // Cannot assign to 'x' because it is a read-only property
//         // this.x = x;
//     }
// }

// const pt = new Point(20);
// // Cannot assign to 'x' because it is a read-only property
// pt.x = 30

