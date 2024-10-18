import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/Login',
    name: 'LoginName',
    component: LoginView
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/App.vue')
  },
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
