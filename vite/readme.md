### Vite 认识

开发服务器 Vite dev -> 打包(跟开发没关系) rollup build

1. Vite 创建开发服务应用

- 现代浏览器 -> ESModule -> import export
- ESModule -> 服务 -> import -> http 请求
- 服务 -> 请求 -> 响应
- 每次 `import` 都会发起一个 http 请求

2. 做编译工作

- `.vue`文件 -> 浏览器不认识
- vite -> 编译 -> `.js`文件(浏览器认识的语法)

```js
export default {
  // template: ``,
  render() {
    return vNodes;
  },
};
// main.js: mount -> vNodes -> Real DOM

import { createApp } from 'vue';
// ESModule通过 ./ ../ /等识别路径, 不认识vue
// node_modules -> vite -> 编译 -> vue -> ./node_modules/@vue/dist/runtime.esm-browser.js
// .js -> import { createApp } './node_modules/@vue/dist/runtime.esm-browser.js'
// http请求 -> .js文件
```

3. 预构建(pre-build)

- ESBuild -> go 语言 -> 速度快
- vite -> 所有第三方依赖 -> 打包 -> node_modules/.vite -> .vite/deps

```js
// .js -> esbuild -> import { createApp } './node_modules/.vite/@vue/vue.js'
```

### Vite 服务构建

- vite1 -> koa, vite2 -> connect
- express, koa -> 基于 connect
- connect -> 中间件工具 -> 创建服务
- vite -> connect -> middleware -> 函数(next,函数执行的暂停功能)

### 中间件的好处

- 洋葱模型: 以`next()`函数为分割点,先由外到内执行请求逻辑,再由内到外执行响应逻辑
- 可以通过函数之间的串联来把任务分成上半部分和下半部分
- 有条件的对上半部分和下半部分的程序进行判断要不要继续执行下去
- 可将一个中间件看做一个分割点,让一个函数的功能程序处于另一个函数制约的一个过程,一个通过才能执行下一个
- 拓展性强,常用于处理请求等

### Vite 要解决的问题

1. 创建服务
2. 创建一个静态的服务 -> 访问端口 -> 映射到一个静态的文件 -> 应用的 index.html
3. `import` -> 文件 —> 路径重写
4. 读取特定文件的内容
5. `.vue`文件编译为浏览器认识的`` 文件
