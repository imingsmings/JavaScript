// function test() {
//   console.log(b); // undefined
//   if (a) {
//     var b = 2;
//   }
//   c = 3;
//   console.log(c); // 3
// }

// var a;
// test();
// a = 1;
// console.log(a); // 1

/**
 * GO = {
 *  a: undefined
 *  test: function test() {}
 *  c: 3
 * }
 *
 * AO = {
 *  b: undefined
 * }
 *
 */

a = 1;
function test(e) {
  function e() {}
  arguments[0] = 2;
  console.log(e); // 2
  if (a) {
    var b = 3;
  }
  var c;
  a = 4;
  var a;
  console.log(b); // undefined
  f = 5;
  console.log(c); //undefined
  console.log(a); // 4
}

var a;
test(1);

/**
 * GO = {
 *  a: undefined ->
 *  test: function test() {}
 *  f: 5
 * }
 *
 * AO = {
 *  e: undefined -> function e(){} -> 2
 *  b: undefined -> 3
 *  a: undefined -> 4
 *  c: undefined
 * }
 */

if (typeof a && -true + +undefined + '') {
  console.log('pass');
} else {
  console.log('not pass');
}

console.log(!!' ' + !!'' - !!false || 'not pass'); // 1
