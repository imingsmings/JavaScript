import { createApp } from 'vue'
import App from './App.vue'
import vuexStore from './store/vuex';
import pinia from './store/pinia';

const app = createApp(App);

app.use(vuexStore);
app.use(pinia);

app.mount('#app')
