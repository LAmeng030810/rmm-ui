import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import RmmUI from 'rmm-ui'

const app = createApp(App)

app.use(RmmUI)

app.mount('#app')
