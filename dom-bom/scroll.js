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
