import { createApp } from 'vue'
import App from './App.vue'
import VueCompones from 'vue-comps'

import 'vue-comps/dist/vue-comps.css';

const app = createApp(App)

app.use(VueCompones)

app.mount('#app')