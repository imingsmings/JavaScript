/**
 * 闭包
 */
// function test1() {
//   function test2() {
//     var b = 2;
//     // a = 2;
//     console.log(a);
//   }

//   var a = 1;
//   return test2;
// }

// var c = 3;
// var test3 = test1();
// test3();

// function test() {
//   var n = 1;

//   function add() {
//     n++;
//     console.log(n);
//   }

//   function reduce() {
//     n--;
//     console.log(n);
//   }

//   return [add, reduce];
// }

// var arr = test();
// console.log(arr);

// arr[0]();
// arr[0]();
// arr[1]();

function breadMgr(num) {
  var breadNum = arguments[0] || 10;

  function supply() {
    breadNum += 10;
    console.log(breadNum);
  }

  function sale() {
    breadNum--;
    console.log(breadNum);
  }

  return [supply, sale];
}

var breadMgr = breadMgr(50);
breadMgr[0]();
breadMgr[1]();

function sunSchedule(thing) {
  var sunSchedule = '';

  var operation = {
    setSchedule: function (thing) {
      sunSchedule = thing;
    },
    showSchedule: function () {
      console.log(thing);
    },
  };

  return operation;
}

var sunScheduled = sunSchedule('Studying');
sunScheduled.setSchedule();
sunScheduled.showSchedule();
