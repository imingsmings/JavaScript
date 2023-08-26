globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

import { createApp } from 'vue';
// import App from './App.vue';

// import App from './1.App.vue';
// import App from './2.App.vue';
// import App from './3.App.vue';
// import App from './4.App.vue';
// import App from './5.App.vue';
// import App from './6.App.vue';
// import App from './7.App.vue';
import App from './8.App.vue';

// createApp(App).mount('#app');

// 应用实例
const app = createApp(App);
// 组件实例
const vm = app.mount('#app');

// vm.count = 1;
// vm.$data.count = 2;
// console.log(vm.title === vm.$data.title);
console.log(vm);
