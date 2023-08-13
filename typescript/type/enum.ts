// enum Direction {
//   Up,
//   Down = 2,
//   Left = 7,
//   Right,
// }

// console.log(Direction.Up); // 0
// console.log(Direction.Down); // 2
// console.log(Direction.Left); // 3
// console.log(Direction.Right); // 4

// enum UserResponse {
//   NO = 0,
//   YES = 1,
// }
// console.log(UserResponse.NO); // 0

// function getSomeValue(): number {
//   return 7;
// }

// enum E {
//   A = getSomeValue(),
//   B
// }

// enum Direction {
//   UP = 'UP',
//   DOWN = 'DOWN',
//   LEFT = 'LEFT',
//   RIGHT = 'RIGHT',
//   DEFAULT = UP,
// }

// enum UserLocation1 {
//   West = 1,
//   East = 4,
//   South,
//   North,
// }

// enum UserLocation2 {
//   West = 'WEST',
//   East = 'EAST',
//   South = 'SOUTH',
//   North = 'NORTH',
// }

// console.log(UserLocation1[4]); // 0

// enum Direction {
//   Up = 1,
//   Down = 3,
//   Left = 5,
//   Right = 10,
// }

// console.log(Direction[1]); // Up
// console.log(Direction[2]); // undefined
// console.log(Direction[3]); // Down
// console.log(Direction[10]); // Right

// enum LogLevel {
//   ERROR,
//   WARN,
//   INFO,
//   DEBUG,
// }

// type LogLevelStrings = keyof typeof LogLevel;

// function printImportant(key: LogLevelStrings, message: string) {
//   console.log(key, message);
// }

// printImportant('ERROR', 'This is a message');

// enum Test {
//   A = 1,
// }
// const a = Test.A; // 0
// const nameOfA = Test[a]; // A

// enum TestStr {
//   A = 'hello',
//   B = 'world',
//   // C =  A + B
// }


// enum Direction {
//   English = 100,
//   Chinese = 200 + 300,
//   Japanese
// }

// enum Language { 
//   Chinese,
//   English,
// }

// enum Language {
//   Japanese
// }

// const enum Color {
//   Red = '#ff0000',
//   Blue = '#0000ff',
//   Pink = 'pink',
//   white = 255
// }

// enum UserLocation {
//   West = 'WEST',
//   East = 'EAST',
//   South = 'SOUTH',
//   North = 'NORTH',
// }

// console.log(Color.Red);
// console.log(Color.Blue);
// console.log(Color[0]);
// console.log(Color[6]);

// enum UserLocation {
//   West,
//   East,
//   South,
//   North,
// }

// console.log(UserLocation[12]);

// enum Color {
//   Red = 1,
//   Green = "green",
//   Blue = 3
// }

// // here, color expects a number
// function printColor(color: Color) {
//   console.log(color);
// }

// printColor(Color.Red); // 1
// // but get a string
// printColor(Color.Green); // "green"
// // it occurs error at runtime
// // TypeScript 编译器无法在编译时检查传递给函数的参数值是否有效
// printColor(2); 

// function getB() {
//   return 10
// }

// enum Test1 {
//   A = 'a',
//   B = 'b'.length
// }

// enum Test2 {
// 	A = 1,
// 	B = getB(),
// }

const enum Test {
  A,
  B = A + 2
}

console.log(Test.A);


declare enum Enum {
  A = 1,
  B,
  C = 2,
}

// enum Enum {
//   D = 1,
// }
// console.log(Enum);
if (1 == Enum.A) {
  console.log('A');
}
