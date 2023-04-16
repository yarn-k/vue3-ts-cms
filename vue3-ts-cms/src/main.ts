import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
// 整合element plus
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router'
import pinia from './store'
import registerIcon from './global/register-icon'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.use(registerIcon)
app.mount('#app')

// createApp(App).use(router).use(ElementPlus).mount('#app')
