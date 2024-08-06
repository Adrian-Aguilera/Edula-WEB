import { createRouter, createWebHistory } from 'vue-router'
import Page_General from '../components/page_general.vue'
import Page_ChatBot from '../components/page_chatbot.vue'
import Page_Classes from '../components/page_classes.vue'
import generalChat from '@views/generalChat/generalChat.vue'

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
  },
  {
    path: '/Classes',
    name: 'Page_Classes',
    component: Page_Classes
  },
  {
    path: '/generalChat',
    name: 'Chat General',
    component: generalChat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
