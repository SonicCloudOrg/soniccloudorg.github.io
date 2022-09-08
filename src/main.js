import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/steps/style/css'
import 'element-plus/es/components/step/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/alert/style/css'
import { ElImage,ElSteps,ElMessage,ElAlert,ElStep } from 'element-plus'
import 'element-plus/theme-chalk/el-image.css'
import router from './router/index.js'

createApp(App)
    .use(ElImage)
    .use(ElSteps)
    .use(ElMessage)
    .use(ElAlert)
    .use(ElStep)
    .use(router)
    .mount('#app')
