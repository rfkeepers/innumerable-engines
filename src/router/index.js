import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/site/Home.vue'
import Feedback from '@/views/site/Feedback.vue'
import AWEotW from '@/views/games/AWEotW.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/feedback', name: 'Feedback', component: Feedback },
  { path: '/aweoftheweek', name: 'AWE of the Week', component: AWEotW },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
