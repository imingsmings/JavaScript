### Vite

Vite 是一个构建工具的高阶封装，内部使用其它的构建工具，比如 rollup。Vite 起初专为 Vue 服务，但在 V2 版本之后，Vite 并不是与框架绑定，而是一种前端的构建工具。


### Vite创建Vue3项目
```js
// 通过npm
npm init @vitejs/app
// 通过yarn
yarn create @vitejs/app
```

### Vite创建Vue2项目
```js
// 安装
npm install vite-plugin-vue2 -D

// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [
    createVuePlugin(/* options */)
  ],
}
```