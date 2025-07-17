import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useLoginStudentStore } from './stores/useLoginStudentStore'

const app = createApp(App)
app.use(Antd)
const pinia = createPinia()
app.use(pinia)
app.use(router)

// 初始化时恢复登录状态
const loginStudentStore = useLoginStudentStore()
loginStudentStore.fetchLoginStudents()

app.mount('#app')
