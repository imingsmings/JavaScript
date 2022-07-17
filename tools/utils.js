function getStyles(element, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return parseInt(window.getComputedStyle(element)[prop]);
    } else {
      return window.getComputedStyle(element, null);
    }
  } else {
    if (prop) {
      return parseInt(element.currentStyle[prop]);
    } else {
      return element.currentStyle;
    }
  }
}

function getScrollOffset() {
  if (window.pageYOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset,
    };
  } else {
    return {
      left: document.documentElement.scrollLeft + document.body.scrollLeft,
      top: document.documentElement.scrollTop + document.body.scrollTop,
    };
  }
}

function getViewportSize() {
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      };
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    }
  }
}

function getScrollSize() {
  if (document.body.scrollWidth) {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
    };
  } else {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    };
  }
}

function getElementPosition(element) {
  var parent = element.offsetParent;
  var offsetLeft = element.offsetLeft;
  var offsetTop = element.offsetTop;

  while (parent) {
    offsetLeft += parent.offsetLeft;
    offsetTop += parent.offsetTop;
    parent = parent.offsetParent;
  }

  return {
    left: offsetLeft,
    top: offsetTop,
  };
}

function getPagePos(event) {
  var sLeft = getScrollOffset().left;
  var sTop = getScrollOffset().top;
  var cLeft = document.documentElement.clientLeft || 0;
  var cTop = document.documentElement.clientTop || 0;
  return {
    x: event.clientX + sLeft - cLeft,
    y: event.clientY + sTop - cTop,
  };
}

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

function removeEvent(element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fn);
  } else {
    element['on' + type] = null;
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

function preventDefaultEvent(event) {
  var e = event || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}
