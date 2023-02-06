define('moduleB', ['moduleA'], function (moduleA) {
  return {
    b: moduleA.a.concat([6, 7, 8, 9, 10]),
  };
});
