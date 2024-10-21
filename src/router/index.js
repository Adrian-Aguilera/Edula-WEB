import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import GeneralChat from '../views/GeneralChat.vue'

const routes = [
  {
    path: '/Login',
    name: 'LoginName',
    component: LoginView
  },
  {
    path: '/GeneralChat',
    name: 'GeneralChat',
    component: GeneralChat
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
