import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ once: true, duration: 600 })

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')