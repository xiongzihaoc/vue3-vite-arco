import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router/index'
// 初始化样式
import 'normalize.css/normalize.css'
// 全局css
import './style/index.scss'
// 引入ArcoVue组件库
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App)
app.use(ArcoVue)
app.use(router)
app.mount('#app')
