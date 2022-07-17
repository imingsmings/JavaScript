// function getPagePos(event) {
//   var sLeft = getScrollOffset().left;
//   var sTop = getScrollOffset().top;
//   var cLeft = document.documentElement.clientLeft || 0;
//   var cTop = document.documentElement.clientTop || 0;
//   return {
//     x: event.clientX + sLeft - cLeft,
//     y: event.clientY + sTop - cTop,
//   };
// }

// document.onclick = function (e) {
//   console.log(e.pageY, getPagePos(e).y);
// };

var box = document.getElementsByClassName('box')[0];

// box.onmousedown = function (e) {
//   var e = e || window.event;
//   // var x = e.offsetX;
//   // var y = e.offsetY;
//   var x = getPagePos(e).x - getStyles(box, 'left');
//   var y = getPagePos(e).y - getStyles(box, 'top');

//   document.onmousemove = function (e) {
//     var e = e || window.event;
//     var pos = getPagePos(e);

//     box.style.left = pos.x - x + 'px';
//     box.style.top = pos.y - y + 'px';
//   };

//   document.onmouseup = function (e) {
//     document.onmousemove = null;
//     document.onmouseup = null;
//   };
// };

function elementDrag(element) {
  var x;
  var y;
  var vp = getViewportSize();
  var width = getStyles(element, 'width');
  var height = getStyles(element, 'height');

  addEvent(element, 'mousedown', function (e) {
    var e = e || window.event;
    var coord = getPagePos(e);
    x = coord.x - getStyles(element, 'left');
    y = coord.y - getStyles(element, 'top');

    addEvent(document, 'mousemove', move);
    addEvent(document, 'mouseup', up);
    cancelBubble(e);
    preventDefaultEvent(e);
  });

  function move(e) {
    var e = e || window.event;
    var coord = getPagePos(e);
    var left = coord.x - x;
    var top = coord.y - y;
    if (left < 0 || left > vp.width - width) {
      left = left < 0 ? 0 : vp.width - width;
    }
    if (top < 0 || top > vp.height - height) {
      top = top < 0 ? 0 : vp.height - height;
    }

    element.style.left = left + 'px';
    element.style.top = top + 'px';
  }

  function up(e) {
    var e = e || window.event;
    removeEvent(document, 'mousemove', move);
    removeEvent(document, 'mouseup', up);
  }
}

elementDrag(box);
