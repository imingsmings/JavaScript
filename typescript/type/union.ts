// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// }

// function printId(id: number | string) {
//   if (typeof id === 'string') {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// printId(100)
// printId('200')
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
// printId({ myID: 22342 })

// function getFirstThree(x: number[] | string) {
//   return x.slice(0, 3);
// }

interface Dog1 {
    name: string;
    age: number;
}

interface Cat1 {
    name: string;
    breed: string;
}

const animal1: Dog1 | Cat1 = {
    name: 'animal',
    age: 13,
}

const animal2: Dog1 | Cat1 = {
    name: 'animal',
    breed: 'dog'
}

const animal3: Dog1 | Cat1 = {
    name: 'animal',
    age: 13,
    breed: 'dog'
}

function returnNullOrString(): null | string {
    return null;
}

function returnNumberOrString(a: number, b: string): number | string {
    return a || b
}