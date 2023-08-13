// function greet(person: { name: string; age: number }) {
//   return 'Hello ' + person.name;
// }
// greet({ name: 'Jason', age: 19, country: 'China' });

// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return 'Hello ' + person.name;
// }

// greet({ name: 'Jason', age: 19})

// type Person = {
//   name: string;
//   age: number;
// };

// function greet(person: Person) {
//   return 'Hello ' + person.name;
// }

interface PaintOptions {
  shape: string;
  // optional property
  xPos?: number;
  yPos?: number;
}

// paintShape({ shape: 'square', xPos: 100 });
// paintShape({ shape: 'circle', yPos: 100 });
// paintShape({ shape: 'triangle', xPos: 100, yPos: 100 });

// function paintShape({ shape, xPos = 100, yPos = 100 }: PaintOptions) {
//   let pos = xPos * 2
// let xPos = opts.xPos === undefined ? 0 : opts.xPos * 2;
// }

// function draw({
//   shape: string,
//   xPos: number = 100,
//   yPos: number = 100,
// }: PaintOptions) {
//   console.log(`Drawing a ${shape} at ${xPos}, ${yPos}`);
// }

// draw({ shape: 'square', xPos: 100 });
