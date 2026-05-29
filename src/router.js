import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('./views/Home.vue') },
  { path: '/contact', name: 'contact', component: () => import('./views/Contact.vue') },
  { path: '/resume', name: 'resume', component: () => import('./views/Resume.vue') },
  { path: '/:pathMatch(.*)*', name: 'Error', component: () => import('./views/Error.vue') }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
