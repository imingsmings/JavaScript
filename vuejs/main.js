globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

// import './11.vue/main.scss';
// import './34.vue/demo';

import { createApp } from 'vue';
// import App from './8.vue/main';
// import App from './9.vue/main';
// import App from './10.vue/main';
// import App from './11.vue/main';
// import App from './12.vue/main';
// import App from './13.vue/main';
// import App from './14.vue/main';
// import App from './15.vue/main';
// import App from './16.vue/main';
// import App from './17.vue/main';
// import App from './18.vue/main';
// import App from './19.vue/App.vue';
// import App from './20.vue/App.vue';
// import App from './22.vue/App.vue';
// import App from './23.vue/App.vue';
// import App from './24.vue/App.vue';
// import App from './25.vue/App.vue';
// import App from './26.vue/App.vue';
// import App from './27.vue/App.vue';
// import App from './28.vue/App.vue';
// import App from './29.vue/App.vue';
// import App from './30.vue/App.vue';
// import App from './31.vue/App.vue';
// import App from './32.vue/App.vue';
// import App from './33.vue/App.vue';
import App from './34.vue/App.vue';

import globalProperties from './33.vue/global';

// 应用实例
const app = createApp(App);
app.config.unwrapInjectedRef = true;

app.config.globalProperties.$msg = 'message';

app.use(globalProperties);

// app.provide('globalMessage', 'universe');
// console.log(app);
/**
 * app属性:
 * component 全局注册组件
 * config 应用配置
 * directive 全局注册自定义指令
 * mixin 全局注册混入器
 * mount 挂载组件
 * unmount 卸载组件
 * provide 注入全局跨组件层级的属性
 * use 使用插件
 * version Vue版本号
 */

// 全局组价
app.component('button-counter', {
  template: `
    <div>
      <p>{{ count }}</p>
      <button @click="handleCounter('+')">+</button>
      <button @click="handleCounter('-')">-</button>
    </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleCounter(type) {
      switch (type) {
        case '+':
          this.count++;
          break;
        case '-':
          this.count--;
          break;
        default:
          break;
      }
    },
  },
});

// 组件实例
const vm = app.mount('#app');
// console.log(vm);
