import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/site/Home.vue'
import feedback from '@/views/site/Feedback.vue'
import aweotw from '@/views/games/AWEotW.vue'
import notfound from '@/views/site/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: home },
  { path: '/feedback', name: 'Feedback', component: feedback },
  { path: '/aweoftheweek', name: 'AWE of the Week', component: aweotw },
  { path: '/:pathMatch(.*)*', component: notfound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
