import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Contact.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Resume.vue')
  },

  {
    path: '*',
    name: 'Error',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Error.vue')
  }
  ]
})
