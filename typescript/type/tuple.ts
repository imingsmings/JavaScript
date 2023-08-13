// type StringNumberPair = [string, number];

// const pair: StringNumberPair = ['hello', 42];

// pair.push(100);

// console.log(pair[0]); // OK
// console.log(pair[1]); // OK
// Tuple type 'StringNumberPair' of length '2' has no element at index '2'.
// console.log(pair[2]); // Error

// function doSomething(pair: StringNumberPair) {
//   const [name, age] = pair;
//   console.log(name, age);
// }

// doSomething(['hello', 42]);

// interface StringNumberPair {
//   length: 2;
//   0: string;
//   1: number;
//   push(value: string | number): void;
// }

// const pair: StringNumberPair = ['hello', 42];
// console.log();

// type Either2dOr3dCoord = [number, number, number?];

// function setCoordinate(coord: Either2dOr3dCoord) {
//   console.log(coord.length); // 2 or 3
// }

// type StringNumberPair = [string, number, ...boolean[]];

// const pair: StringNumberPair = ['hello', 42, true, false, true];
// console.log(pair.length);

// function readButtonInput(...args: [string, number, ...boolean[]]) {
//   const [name, version, ...input] = args;
// }

// const tuple: [string, number] = ['hello', 42];
// tuple.push(100);
// console.log(tuple);

// function doSomething(pair: readonly [string, number]) {
//   // Cannot assign to '1' because it is a read-only property.
//   pair[1] = 100;
// }

// const point = [3, 4] as const;

// function doSomething(pair: readonly [number, number]) {
// pair.push(100);
// }

/**
 * 类型不兼容
 * [3, 4] as const -> readonly [3, 4]
 * [3, 4] -> [3, 4]
 */
// doSomething(point);

// interface UserInfo {
//   username: string;
//   age: number;
// }

// function getUserInfo(userId: string): [string, number] {
//   const username: string = 'John';
//   const age: number = 18;
//   return [username, age];
// }

// type CSVRow = [string, number, boolean];

// const data: CSVRow[] = [
//   ['hello', 42, true],
//   ['world', 100, false],
// ]

// type AddFun = (a: number, b: number) => [number, string];
// const add: AddFun = (a, b) => [a + b, `The result is ${a + b}`];

// const [result, message] = add(1, 2);
// console.log(result);
// console.log(message);

// let as: readonly number[] = [1, 2, 3];
// as.push(4);

// type A = readonly string[];
// type B = ReadonlyArray<string>;
// type C = Readonly<string[]>;
// type D = readonly [number, string];
// type E = Readonly<[number, string]>;
