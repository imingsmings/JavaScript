// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuecoms from 'vue-coms'

import 'vue-coms/assets/style.css'

const app = createApp(App)

app.use(router)
app.use(vuecoms)

app.mount('#app')
