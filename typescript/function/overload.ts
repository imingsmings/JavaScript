// function makeDate(timestamp: number): Date;
// function makeDate(timeString: string): Date;
// function makeDate(m: number, d: number, y: number): Date;

// function makeDate(mOrTimestamp: number | string, d?: number, y?: number): Date {
//     if (d !== undefined && y !== undefined) {
//         return new Date(y, mOrTimestamp as number, d);
//     } else {
//         return new Date(mOrTimestamp);
//     }
// }

// console.log(makeDate(1687399094569));
// console.log(makeDate(5, 23, 2023));
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// makeDate(5, 23)
// console.log(makeDate('2023-05-23'));

// This overload signature is not compatible with its implementation signature.
// function fn(x: number): void;
// function fn(x: string): void;
// function fn(x: string | number): void {
// }

// interface User {
//     name: string;
//     admin: boolean;
// }
// const users: User[] = [
//     {
//         name: 'Jack',
//         admin: false
//     },
//     {
//         name: 'Jane',
//         admin: true
//     }
// ]

// const admins = users.filter((function(this: User) {
//     console.log(this);
//     return this.admin;
// }));

// console.log(admins);

// interface DB {
//     filterUsers(filter: (this: User) => boolean): User[];
// }

// interface User {
//     name: string;
//     admin: boolean;
// }

// function getDB() {
//     return {
        
//     }
// }

// const db: DB = {
//     filterUsers(f) {
//         return [
//             {
//                 name: 'Jack',
//                 admin: false
//             },
//             {
//                 name: 'Jane',
//                 admin: true
//             }
//         ].filter(f);
//     }
// }

// const admins = db.filterUsers(function(this: User) {
//     return this.admin;
// });

// console.log(admins);


// interface DB {
//     filterUsers(filter: (this: User) => boolean): User[];
//   }
   
// const db = getDB();
// const admins = db.filterUsers(function (this: User) {
//     return this.admin;
// });

// function doSth(f: Function) {
//     return f(1, 2, 3);
// }


// function doSth(f: () => void) { }
