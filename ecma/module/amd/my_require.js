/**
 * 简易版require.js
 */
var namespace = (function () {
  // 缓存模块
  var cache = {};
  // 返回一个函数用于加载模块
  return function createModule(name, deps, fn) {
    // 递归获取依赖结果作为当前模块的回调参数
    deps = deps.map(function (depName) {
      return cache[depName];
    });

    // 执行回调获取到结果
    cache[name] = fn.apply(null, deps);

    // 返回模块的结果
    return cache[name];
  };
})();

var mathModule = namespace('math', [], function () {
  function add(a, b) {
    return a + b;
  }

  function minus(a, b) {
    return a - b;
  }

  return {
    add,
    minus,
  };
});

var calculatorModule = namespace('calculator', ['math'], function (module) {
  // var action = 'add';
  var action = 'minus';
  function compute(a, b) {
    return module[action](a, b);
  }
  return {
    compute,
  };
});

console.log(calculatorModule.compute(1, 2));
