(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    var num = 666;
    module.exports = factory(num);
  } else {
    root.testModule = factory(root.jQuery);
  }
})(this, function (num) {
  console.log(num);
});
