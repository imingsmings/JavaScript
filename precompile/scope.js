/*
1. 当a函数被定义时，系统生成[[scope]]属性，[[scope]]保存该函数的作用域链，
该作用域链的第0位存储当前环境下的全局执行期上下文GO，GO里存储全局下的所有对象，
其中包含函数a和全局变量c
2. 当a函数被执行时（前一刻），作用域链的顶端（第0位）存储a函数生成的函数执行期
上下文AO，同时第1位存储GO
3. 当b函数被定义时，是在a函数环境中，所以b函数这时的作用链就是a函数被执行期的作用域链
4. 当a函数被执行时（前一刻），生成函数b的[[scope]]，存储函数b的作用域链，
顶端第0位存储b函数的AO，a函数的AO和全局的GO依次向下排列
5. 查找变量是到该函数存储的作用域链中从顶端开始依次向下查找
6. 当b函数被执行结束后，b函数的AO被销毁，回归被定义时的状态
7. 当a函数被执行结束后，a函数的AO被销毁的同时，b函数的[[scope]]也将不存在，
a函数回归到被定义时的状态
*/
// function a() {
//   function b() {
//     var b = 2;
//   }
//   var a = 2;
//   b();
// }
// var c = 3;
// a();

// test();
// test2(); // test2 is not a function
// function test() {}

// var test2 = function () {
//   console.log(123);
// };

function test() {
  var num = 0;
  var operation = {
    setNum: function (n) {
      num += n;
    },
    getNum: function () {
      return num;
    },
  };

  return operation;
}

var testNum = test();
testNum.setNum(1);
testNum.setNum(1);
console.log(testNum.getNum());
