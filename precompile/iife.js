// (function (a, b) {
//   console.log(a + b);
// })(1, 2);

// (function test() {
//   console.log(test);
// })();

// function test() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     arr[i] = function () {
//       console.log(i);
//     };
//   }
//   return arr;
// }

// var res = test();
// for (var i = 0; i < 10; i++) {
//   res[i](); // 10个10
// }

// var fn = (function test1() {
//   return 1;
// },
// function test2() {
//   return '2';
// })();

// console.log(typeof fn);

// var a = 10;
// if (function b() {}) {
//   a += typeof b;
// }

// console.log(a);
function classStu() {
  var stuNames = ['张三', '李四', '王五'];
  var operation = {
    joinClass: function (name) {
      stuNames.push(name);
      console.log(name, '加入了班级');
    },
    leaveClass: function (name) {
      var index = stuNames.findIndex((stu) => name === stu);
      if (index === -1) {
        console.log(name, '不在此班级');
      } else {
        stuNames.splice(1, 1);
        console.log(name, '离开了班级');
      }
    },
  };

  return operation;
}

var stu = classStu();
stu.joinClass('wxm');
stu.leaveClass('wxm');
