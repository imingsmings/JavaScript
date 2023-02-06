require.config({
  paths: {
    moduleA: 'module/module_a',
    moduleB: 'module/module_b',
    moduleC: 'module/module_c',
  },
});
require(['moduleA', 'moduleB', 'moduleC'], function (
  moduleA,
  moduleB,
  moduleC
) {
  console.log(moduleA.a);
  console.log(moduleB.b);
  console.log(moduleC.c);
});
