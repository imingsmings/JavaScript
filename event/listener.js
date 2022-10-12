// const oOuter = document.querySelector('.outer');
// const oInner = document.querySelector('.inner');

// oOuter.addEventListener(
//   'click',
//   function () {
//     console.log('outer');
//   },
//   {
//     capture: false,
//     // once: true,
//   }
// );

// oInner.addEventListener(
//   'click',
//   function (e) {
//     // e.preventDefault();
//     console.log('inner');
//   },
//   {
//     capture: false,
//     // once: true,
//     passive: true,
//   }
// );

window.addEventListener(
  'touchstart',
  function (e) {
    // e.preventDefault();
  },
  {
    /**
     * touchstart: 默认行为为滚动
     * 阻止默认行为的方法不会调用
     * 两个线程去处理滚动的问题
     *  1. 处理器程序的执行
     *  2. 执行默认行为
     */
    passive: true,
  }
);
