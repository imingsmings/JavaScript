// interface IAccountInfo {
//     id: number,
//     name: string,
//     age: number
// }

// const info = <IAccountInfo>{
//     id: 1,
//     name: "Tom",
//     // error
//     age: "12",
//     // error
//     address: "No.1"
// }

// interface Person {
//     name: string;
//     age: number;
//   }
  
//   interface ReadonlyPerson {
//     readonly name: string;
//     readonly age: number;
//   }
  
//   const writablePerson: Person = {
//     name: 'Jason',
//     age: 14,
//   };
  
//   const readonlyPerson: ReadonlyPerson = writablePerson;
  
//   console.log(readonlyPerson.age); // 14
//   writablePerson.age++;
//   console.log(readonlyPerson.age); // 15

// type TypeKeys = 'a' | 'b' | 'c'

// type TObjec = {
//     [key in TypeKeys]: any
// }

// const o: TObjec = {
//     a: 1,
//     b: '2',
//     c: 3,
// }