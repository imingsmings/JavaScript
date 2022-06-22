function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function gen(arr) {
  var index = 0;
  return {
    next: function () {
      return index < arr.length
        ? { value: arr[index++], done: false }
        : { value: arr[index], done: true };
    },
  };
}

const it = gen([1, 2, 3, 4]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
