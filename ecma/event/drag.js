Element.prototype.dragElement = function (callback) {
  drag.call(this);

  var beginTime = 0;
  var endTime = 0;
  var vp = getViewportSize();
  var originPos = {};

  function drag() {
    var x;
    var y;
    var _self = this;
    var width = getStyles(this, 'width');
    var height = getStyles(this, 'height');

    addEvent(this, 'mousedown', function (e) {
      // 右击事件
      beginTime = new Date().getTime();
      var e = e || window.event;
      var coord = getPagePos(e);
      var left = getStyles(this, 'left');
      var top = getStyles(this, 'top');
      originPos.left = left;
      originPos.top = top;

      x = coord.x - left;
      y = coord.y - top;

      addEvent(document, 'mousemove', move);
      addEvent(document, 'mouseup', up);
      addEvent(window, 'resize', resize);

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

      _self.style.left = left + 'px';
      _self.style.top = top + 'px';
    }

    function up(e) {
      var e = e || window.event;
      endTime = new Date().getTime();
      if (endTime - beginTime < 100) {
        _self.style.left = originPos.left + 'px';
        _self.style.top = originPos.top + 'px';
        callback();
        // 双击
      }
      removeEvent(document, 'mousemove', move);
      removeEvent(document, 'mouseup', up);
    }

    function resize() {
      vp = getViewportSize();
      var top = getStyles(_self, 'top');
      var left = getStyles(_self, 'left');

      if (left >= vp.width - width) {
        _self.style.left = vp.width - width + 'px';
      }
      if (top >= vp.height - height) {
        _self.style.top = vp.height - height + 'px';
      }
    }
  }
};

var oA = document.getElementsByTagName('a')[0];
oA.dragElement(function () {
  window.open('https://www.imings.cn/');
});

var oBtn = document.getElementsByTagName('button')[0];
oBtn.onmousedown = function (e) {
  console.log(e);
};
