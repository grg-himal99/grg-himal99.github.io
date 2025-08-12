import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./views/Contact.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('./views/Resume.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('./views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
