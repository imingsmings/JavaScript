// interface SomeType {
//   readonly prop: string;
// }

// function doSomething(obj: SomeType) {
//   console.log(obj.prop);

//   obj.prop = 'hello';
// }

/*
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}!`);
  
  // internal content can be changed
  home.resident.age++;

  // but the reference cannot be changed
  // Cannot assign to 'resident' because it is a read-only property.
  home.resident = {}
}
*/

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

const writablePerson: Person = {
  name: 'Jason',
  age: 14,
};

const readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // 14
writablePerson.age++;
console.log(readonlyPerson.age); // 15
