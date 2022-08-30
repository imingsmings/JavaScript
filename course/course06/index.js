// function test() {
//   console.log('test');
// }

// console.log(test.length);
// console.log(test.name);

function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();
/**
 * a定义: a.[[scope]] -> 0 : GO
 * a执行: a.[[scope]] -> 0 : a -> AO
 *                      1 : GO
 * b定义: b.[[scope]] -> 0 : a -> AO
 *                      1 : GO
 * b执行: b.[[scope]] -> 0 : b -> AO
 *                      1 : a -> AO
 *                      2 : GO
 * c定义: c.[[scope]] -> 0 : b -> AO
 *                      1 : b -> AO
 *                      2: GO
 * c执行: c.[[scope]] -> 0 : c -> AO
 *                      1 : b -> AO
 *                      2 : a -> AO
 *                      3 : GO
 * c结束: c.[[scope]] -> 0 : b -> AO
 *                      1 : a -> AO
 *                      2 : GO
 * b结束: b.[[scope]] -> 0 : a -> AO
 *                      1 : GO
 * a结束: c.[[scope]] X
 *       a.[[scope]] -> 0 : GO
 *       b.[[scope]] X
 */
