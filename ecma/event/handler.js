// var oBtn = document.getElementsByTagName('button')[0];

// oBtn.onclick = function () {
//   this.innerHTML = '加载中...';
//   this.className = 'Loading';
//   var that = this;
//   setTimeout(function () {
//     that.innerHTML = '加载更多';
//     that.className = '';
//   }, 2000);
// };

// oBtn.onclick = function () {
//   console.log('加载更多');
// };

// oBtn.addEventListener(
//   'click',
//   function () {
//     console.log('加载更多1');
//   },
//   false
// );

// oBtn.addEventListener(
//   'click',
//   function () {
//     console.log('加载更多2');
//   },
//   false
// );

// oBtn.addEventListener('click', handler, false);
// oBtn.addEventListener('click', handler, false);

// function handler() {
//   console.log('加载更多');
// }
var oBtn = document.getElementsByTagName('button')[0];
var oUl = document.getElementsByTagName('ul')[0];
var oLi = document.getElementsByTagName('li');
var len = oLi.length;
var item;

// for (var i = 0; i < len; i++) {
//   item = oLi[i];
//   (function (item, i) {
//     item.addEventListener(
//       'click',
//       function () {
//         console.log(item.innerHTML);
//       },
//       false
//     );
//   })(item, i);
// }

function addEvent(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, function () {
      fn.call(element);
    });
  } else {
    element['on' + type] = fn;
  }
}

function cancelBubble(event) {
  var e = event || window.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}

var wrapper = document.getElementsByClassName('wrapper')[0];
var outer = document.getElementsByClassName('outer')[0];
var inner = document.getElementsByClassName('inner')[0];

// addEvent(wrapper, 'click', function (e) {
//   console.log(e);
//   console.log('wrapper');
// });

// addEvent(outer, 'click', function () {
//   console.log('outer');
// });

// addEvent(inner, 'click', function (e) {
//   var e = e || window.event;
//   e.stopPropagation();
//   console.log('inner');
// });

// document.oncontextmenu = function (e) {
//   console.log('document');
//   e.preventDefault();
//   return false;
//   e.returnValue = false;
// };

addEvent(wrapper, 'click', function (e) {
  console.log(e);
  // console.log('wrapper');
});

oBtn.addEventListener(
  'click',
  function (e) {
    var li = document.createElement('li');
    li.innerHTML = oLi.length + 1;
    oUl.appendChild(li);
  },
  false
);

oUl.addEventListener(
  'click',
  function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var index = Array.prototype.indexOf.call(oLi, target);
    console.log(target.innerHTML);
    console.log(index);
  },
  false
);
