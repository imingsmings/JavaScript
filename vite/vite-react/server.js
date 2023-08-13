const express = require("express");
const fs = require("fs");

const app = express();

const { createServer: createViteServer } = require("vite");

// createViteServer() 相当于 yarn dev 启动了vite服务
createViteServer({
  server: {
    // middlewareMode: 'html',  // 启动了一个Vite服务
    middlewareMode: "ssr", // 服务端渲染
  },
}).then((vite) => {
  app.use(vite.middlewares); // 使用中间件

  app.get("*", async (req, res) => {
    // 读取模板
    let template = fs.readFileSync("index.html", "utf-8");
    // react-plugin-refresh 问题处理
    template = await vite.transformIndexHtml(req.url, template);
    // 载入渲染入口
    const {render} = await vite.ssrLoadModule('/src/server-entry.jsx');
    // 渲染
    const html = await render(req.url)
    // 替换模板
    const responseHTML = template.replace('<!--APP_HTML-->', html);
    // 返回给客户端
    res.set('content-type','text/html').send(responseHTML)
  });
  app.listen(4000);
});
