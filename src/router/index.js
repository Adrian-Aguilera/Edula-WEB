import { createRouter, createWebHistory } from 'vue-router'
import Page_General from '../components/page_general.vue'
import Page_ChatBot from '../components/page_chatbot.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Page_General
  },
  {
    path: '/Chat',
    name: 'Page_ChatBot',
    component: Page_ChatBot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
