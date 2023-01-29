/**
 * 1.请求资源
 *   异步请求
 *    数据: 字符串、数字、JSON、XML等
 *    文件: 视频、音频、文本文件、HTML/CSS/JS等
 *
 * 2.请求的前提
 *  有资源 -> 服务器 -> 电脑
 *  有地址 -> API/URL -> 资源定位
 *  通过一个资源定位 -> 服务器 -> 找到 -> 某个特定的资源
 *
 * 3.响应的前提
 *  服务器 -> 允许 -> 请求
 *  确认 -> 有资源定位对应的资源
 *  将这个资源返回给请求方(浏览器/服务器)
 *
 * 4.资源是拿来干什么的?
 *   页面 -> HTML -> 服务器
 *   使用HTML -> 请求服务器响应这个资源HTML -> 将这个HTML响应给客户端 -> 下载这个文件/加载这个文件编码的过程
 *   HTML编码 -> 浏览器 -> 解析
 *      link -> 下载CSS文件
 *      body -> 解析HTML -> 组装DOM树
 *      script -> 阻塞 -> 下载JS文件 -> 解析JS编码 -> 执行
 *
 * 5.Web项目运行环境的问题
 *  xxx.xxx.xxx/test -> DNS解析 -> 服务器 -> 映射 -> web文件夹 -> index.html -> 响应
 *  静态文件夹 -> 允许访问的 -> 开放的文件(HTML/CSS/JS) -> 浏览器环境运行
 *  前端 -> 将资源从服务器上响应回来,在前端运行
 *  后端 -> 将资源拿出来直接在服务器环境里运行
 *
 * 6.混编模式
 *  http://localhost:8888/index.php
 *  -> 请求 -> URL -> 服务器 -> 映射到这个资源
 *  -> php解释器 -> php文件 -> php源码 -> 执行输出结果给HTML
 *  -> 响应给客户端
 *
 * 7. 渲染方式
 *  服务端渲染
 *  客户端渲染
 *  混编模式
 */