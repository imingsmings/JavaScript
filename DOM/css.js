var oDiv = document.getElementsByClassName('box')[0];

oDiv.style.width = '200px';
oDiv.style.cssFloat = 'right';

function getStyles(element, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return window.getComputedStyle(element)[prop];
    } else {
      return window.getComputedStyle(element, null);
    }
  } else {
    if (prop) {
      return element.currentStyle[prop];
    } else {
      return element.currentStyle;
    }
  }
}
