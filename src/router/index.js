import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CreateAccountViewAccountView from '../views/CreateAccountView.vue'

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
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
