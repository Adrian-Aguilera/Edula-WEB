import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CreateAccountViewAccountView from '../views/CreateAccountView.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
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

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
