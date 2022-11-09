// function test() {
//   var a = 1;
//   var cc = 4;
//   debugger;
//   function b() {
//     // debugger;
//     a = 4;
//     var b = 2;
//     debugger;
//   }
//   b();
// }

// test();

// function a() {
//   debugger;
//   function b() {
//     debugger;
//     function c() {
//       debugger;
//     }
//     c();
//   }
//   b();
// }
// a();

// function test1() {
//   var n = 100;
//   function add() {
//     n++;
//     console.log(n);
//   }

//   function minus() {
//     console.log(this); [f, f]
//     n--;
//     console.log(n);
//   }

//   return [add, minus];
// }

// var res = test1();
// res[0]();
// res[0]();
// res[1]();
