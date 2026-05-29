import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ once: true, duration: 600 })

createApp(App).use(vuetify).use(i18n).use(router).mount('#app')
