// type PersonInfo = {
//     name: string;
//     age: number;
//     alice: boolean
// }

// type Age = PersonInfo['age']

// type T1 = string | number
// type T1 = PersonInfo['age' | 'name'];

// type T2 = string | number | boolean
// type T2 = PersonInfo[keyof PersonInfo];

// Property 'address' does not exist on type 'PersonInfo'.
// type T3 = PersonInfo['address']

// const MyArray = [
//     { name: 'Alice', age: 14 },
//     { name: 'Bob', age: 15 }
// ]

// type PersonInfo = typeof MyArray[number]
// type PersonAge = typeof MyArray[number]['age']

// const key = 'age'
type key = 'age'
// Type 'key' cannot be used as an index type.ts(2538)
type PersonAge = Person[key]