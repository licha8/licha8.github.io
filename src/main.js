import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import axios from 'axios'//引入axios

import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.$axios=axios
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
