// type TypeTest = (a: number, b: number) => number;

// const test: TypeTest = (a, b) => {
//     return a + b
// }

// type TypeTest = (a: string, b: string) => number;
// type TypeTest = (a: unknown, b: unknown) => void;

/**
Type '(a: number, b: number) => number' is not assignable to type 'TypeTest'.
  Types of parameters 'a' and 'a' are incompatible.
    Type 'string' is not assignable to type 'number'.
 */
// const test: TypeTest =  (a: number, b: number): number => {
//     return a + b
// }

// type TypeTest = (a: number, b: number) => void;

// const test: TypeTest = (a: number, b: number): number => {
//     return a + b
// }

// const res = test(1, 2)

// console.log(res);

// Type 'number' is not assignable to type 'void'.
// function test(a: number, b: number): void {
//     return a + b
// }