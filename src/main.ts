import { createApp } from 'vue'
import './style.css'
import router from './router'
import autoAnimate from './directives/autoAnimate'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.directive('auto-animate', autoAnimate)

app.mount('#app')
