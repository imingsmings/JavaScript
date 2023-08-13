// type Point = {
//     x: number;
//     y: number;
// }

// function printPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }

// printPoint({ x: 12, y: 26 });

// type ID = string | number;
// type Dog12 = { name: string } & { age: number };

type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return 'sanitized string';
}
 
let userInput = sanitizeInput('user input');
 
userInput = "new input";