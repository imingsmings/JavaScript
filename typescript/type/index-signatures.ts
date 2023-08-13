// interface StringArray {
//   [index: number]: string;
// }

// const myArray: StringArray = ['Bob', 'Fred'];
// const firstItem = myArray[0];
// console.log(firstItem);

// interface NumberDict {
//   [index: string]: number;
//   length: number;
// Property 'name' of type 'string' is not assignable to 'string' index type 'number'.t
//   name: string;
// }

// interface NumberOrStringDict {
//   [index: string]: number | string;
//   length: number;
//   name: string;
// }

// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }

// const myArray: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray[1] = 'Mallory'; // error!

// interface Test {
//   [index: string]: string;
// }

// const arr: Test = ['a', 'b', 'c'];

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Animal;
  [x: string]: Animal;

  // [x: number]: Dog;
  // [x: string]: Dog;

  // [x: number]: Animal;
  // [x: string]: Dog;
}

// const animal: NotOkay = { 0: { name: 'dog' } };
const dog: NotOkay = { 0: { name: 'dog' } };
