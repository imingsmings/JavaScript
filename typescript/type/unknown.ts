// function test1(a: any) {
//   a.b();
// }

// function test2(a: unknown) {
// 'a' is of type 'unknown'.
// a.b();

//   if (typeof a === 'function') {
//     a();
//   } else if (typeof a === 'string') {
//     console.log(a.length);
//   } else {
// handle other cases
//   }
// }

// let myVar: unknown = 10;
// let strVar: string = 'hello';

// 其它类型赋值给unknown类型
// myVar = strVar;

// Type 'unknown' is not assignable to type 'string'.
// strVar = myVar; // error

// let xx: number = 1;
// let yy: any = 2;

// xx = yy; // OK
// yy = xx;

// let mm: number = 1;
// let nn: unknown = 2;

// n = m;
// mm = nn
// nn == mm;



// function test1(a: any) {
//     a.b();
// }
  
// function test2(a: unknown) {
// a.b();
// }