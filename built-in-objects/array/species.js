// class SubClass extends Array {}
// console.log(SubClass[Symbol.species] === SubClass);

class SubClass {
  constructor(length) {
    console.log('constructor');
    this.length = length;
  }
}

const arr = [1, 2, 3];
arr.constructor = {
  [Symbol.species]: SubClass,
};

// const result = arr.map((item) => {
//   console.log('map');
//   return item;
// });
const result1 = arr.filter((item) => {
  console.log('filter');
  return item;
});

// console.log(result);
console.log(result1);
