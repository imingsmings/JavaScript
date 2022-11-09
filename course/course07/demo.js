// // var test = (function () {
// //   console.log(123);
// // })();

// // function tes(a) {}(6);

// // var num = (3, 4);
// // console.log(num); // 4

// function test() {
//   var arr = [];

//   for (var i = 0; i < 10; i++) {
//     // arr[i] = function () {
//     //   console.log(i);
//     // };
//     (function (j) {
//       // 闭包函数
//       arr[i] = function () {
//         console.log(j);
//       };
//     })(i);
//   }

//   return arr;
// }

// var myArr = test();
// console.log(myArr);

// for (var j = 0; j < 10; j++) {
//   myArr[j]();
// }

// var oLi = document.querySelectorAll('li');
// // console.log(oLi);
// for (var i = 0; i < oLi.length; i++) {
//   // oLi[i].onclick = function () {
//   //   console.log(i);
//   // };
//   (function (index) {
//     oLi[i].onclick = function () {
//       console.log(index);
//     };
//   })(i);
// }

// var fn = (function test1() {
//   return 1;
// },
// function test2() {
//   return '2';
// })();
// console.log(typeof fn); // string

// var a = 10;

// if (function b() {}) {
//   a += typeof b;
// }
// console.log(a);

function students() {
  var names = ['张三', '李四', '王五', '赵六'];

  function leave(name) {
    var index = names.findIndex(function (item) {
      return item === name;
    });
    if (index >= 0) {
      names.splice(index, 1);
    }
    console.log(names);
  }

  function join(name) {
    names.push(name);
    console.log(names);
  }

  var operation = {
    leave,
    join,
  };

  return operation;
}

var stu = students();
stu.leave('王五');
// stu.join('小明');
// stu.leave('小红');

function sum() {
  var result = 0;

  function add(num) {
    result += num || 1;
    return result;
  }

  return {
    add,
  };
}

var result = sum();
// console.log(result);
console.log(result.add(2));
console.log(result.add(10));
console.log(result.add());
