import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
// 整合element plus
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// createApp(App).use(router).use(ElementPlus).mount('#app')
