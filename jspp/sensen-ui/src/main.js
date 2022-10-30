import { createApp } from 'vue'
import App from './App.vue'
import SensenUI from '../modules/sensen-ui';
import Transfer from '../modules/sensen-ui/Transfer';

// createApp(App).use(SensenUI).mount('#app');

createApp(App).use(Transfer).mount('#app');
