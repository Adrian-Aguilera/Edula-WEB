import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CreateAccountViewAccountView from '../views/CreateAccountView.vue'
import HomeView from '../views/HomeView.vue'
import GeneralChatView from '@/views/GeneralChatView.vue'
const routes = [
  {
    path: '/Login',
    name: 'LoginName',
    component: LoginView
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccountName',
    component: CreateAccountViewAccountView
  },
  {
    path: '/Home',
    name: 'HomeName',
    component: HomeView

  },
  {
    path: '/',
    name: 'GeneralChat',
    component: GeneralChatView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
