function Vue(options) {
  // 初始化
  this._init(options);
}

// 数据劫持初始化是已经完成
Vue.prototype._init = function () {};

console.log(Vue);

export default Vue;
