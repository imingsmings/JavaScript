var data = function () {
  return {
    a: 1,
    b: 2,
  };
};

function Vue(options) {
  this.$data = options.data();
  this._methods = options.methods;

  var _this = this;

  for (var key in this.$data) {
    (function (k) {
      Object.defineProperty(_this, k, {
        get: function () {
          return _this.$data[k];
        },
        set: function (newValue) {
          _this.$data[k] = newValue;
        },
      });
    })(key);
  }

  for (var key in this._methods) {
    _this[key] = this._methods[key];
  }

  return _this;
}

var vue1 = new Vue({
  data: data,
  methods: {
    addA() {
      this.a = this.a + 1;
    },
  },
});
// var vue2 = new Vue({
//   data: data,
// });
// vue2.b = 3;
console.log(vue1);
vue1.addA();
console.log(vue1.a);
// console.log(vue2);
