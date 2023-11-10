// let aaa: number;

// aaa = 1;

// type TypeA = typeof aaa;

// function pluss(a: number, b: number): number {
//     return a + b
// }

// type TypePlus = typeof pluss

// const o = {
//     a: 1,
//     b: 2
// }

// type TypeObjecy = typeof o

const MyArray = [
    { name: 'Alice', age: 14 },
    { name: 'Bob', age: 15 }
]

type PersonInfo = typeof MyArray[number]
type PersonAge = typeof MyArray[number]['age']