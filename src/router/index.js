import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/site/Home.vue'
import feedback from '@/views/site/Feedback.vue'
import aweotw from '@/views/games/AWEotW.vue'
import dwpbs from '@/views/games/DWPlaybooks.vue'
import witch from '@/views/playbooks/Witch.vue'
import monk from '@/views/playbooks/Monk.vue'
import nightwatch from '@/views/playbooks/Nightwatch.vue'
import powdermage from '@/views/playbooks/Powdermage.vue'
import necrogardener from '@/views/playbooks/Necrogardener.vue'
import worldsmith from '@/views/playbooks/Worldsmith.vue'
import notfound from '@/views/site/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: home },
  { path: '/feedback', name: 'Feedback', component: feedback },
  { path: '/aweoftheweek', name: 'AWE of the Week', component: aweotw },
  { path: '/dwplaybooks', name: 'Duneon World Playbooks', component: dwpbs },
  { path: '/dwplaybooks/witch', name: 'The Witch', component: witch },
  { path: '/dwplaybooks/monk', name: 'The Monk', component: monk },
  { path: '/dwplaybooks/nightwatch', name: 'The Nightwatch', component: nightwatch },
  { path: '/dwplaybooks/powdermage', name: 'The Powdermage', component: powdermage },
  { path: '/dwplaybooks/necrogardener', name: 'The Necrogardener', component: necrogardener },
  { path: '/dwplaybooks/worldsmith', name: 'The Worldsmith', component: worldsmith },
  { path: '/:pathMatch(.*)*', component: notfound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
