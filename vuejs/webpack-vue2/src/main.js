import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import myShow from './directives/myShow';

Vue.use(Antd);
Vue.directive('myShow', myShow);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
