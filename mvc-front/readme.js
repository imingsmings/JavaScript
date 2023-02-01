/**
 * 前端渲染:
 *   HTML文件 -> div#app
 *   URL -> 请求 -> html文件 -> html div#app ->
 *   解析HTML文件 -> 渲染 div#app -> script -> 下载脚本 -> 执行脚本 ->
 *   异步请求API -> 数据 -> DOM操作 —> DOM结构 -> 渲染 -> div#app
 *
 * 前端MVC:
 *  V: 模板 -> 函数返回/模板文件
 *  M: Service -> 请求服务 —> 请求函数
 *  C: 调用请求函数 —> 数据 -> 模板渲染
 *
 * MVC和MVVM没有任何关系
 *  MVC是一种设计思想、架构方案
 *  MVVM是一种构建应用程序以及使用应用的一种方式
 *  M -> MC
 *
 * Vue
 *  V: 组件化
 *  M: Service -> 请求数据
 *  C: 提供数据 -> 数据逻辑操作
 */
