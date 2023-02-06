// function test(a = 1, b) {
//   console.log(a, b);
// }
// test(2, 2); // 2 2
// test(undefined, 2); // 1 2
// test(null, 2); // null 2

function test(a, b) {
  var a = arguments[0] || 1;
  var b = arguments[1] || 2;
  // a = a || 1;
  // b = b || 2;
  console.log(a, b);
}

test(3, 4); // 3 4
test(); // 1 2
