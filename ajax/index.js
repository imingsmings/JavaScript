/*
open 发送设置
  method 请求方式
  url 请求发送的地址
  async true同步 false同步

send 发起请求
  发送post的请求体,get则不填写

onreadystatechange事件 挂载在XMLHttpRequest对象上 readyState状态变化时执行回调
readyState状态: 通过XMLHttpRequest对象发送HTTP请求的各个阶段的状态码(0~4)
  - 0 请求未初始化
  - 1 服务器连接已建立
  - 2 请求已接收
  - 3 请求处理中
  - 4 请求已完成, 且响应已就绪
status状态: 服务器响应的状态码

readyState仅针对请求的状态码,获取资源是否成功取决于status状态
*/

var xhr;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

console.log(xhr.readyState); // 0
// xhr.open('get', '/test/demo1.js', true);

xhr.open('post', '/test/demo1.js', true);
// post请求请求头必须设置,目的是请求体中的数据转换为键值对
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.send();

xhr.send('a=1&b=2');

console.log(xhr.readyState); // 1

xhr.onreadystatechange = function () {
  // 2 3 4
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('success');
    console.log(xhr.readyState);
  }
};
