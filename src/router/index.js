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

const nameMaker = (...t) => t.join(' - ');
const titleMaker = (...t) => t.join(' - ').concat(' - Innumerable Engines');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      title: titleMaker('Home'),
      tags: [
        {
          name: 'description',
          content: 'Innumerable Engines - pbta games, hacks, and playbooks for Monster of the Week, Dungeon World, and other systems.',
        },
      ],
    },
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: feedback,
    meta: {
      title: titleMaker('Feedback'),
      tags: [
        {
          name: 'description',
          content: 'Give some feedback about the site!',
        },
      ],
    },
  },
  {
    path: '/aweoftheweek',
    name: 'AWE of the Week',
    component: aweotw,
    meta: {
      title: titleMaker('AWE of the Week'),
      tags: [
        {
          name: 'description',
          content: 'A Monster of the Week conversion kit for running games in a Control or SCP foundation universe.',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks',
    name: 'Dungeon World Playbooks',
    component: dwpbs,
    meta: {
      title: titleMaker('Dungeon World Playbooks'),
      tags: [
        {
          name: 'description',
          content: 'Custom Dungeon World playbooks along with the open-source, LaTeX-based template so that you can create your own playbooks!',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks/witch',
    name: nameMaker('The Witch', 'Dungeon World Custom Playbook'),
    component: witch,
    meta: {
      title: titleMaker('The Witch', 'DW Playbook'),
      tags: [
        {
          name: 'description',
          content: 'Add a touch of horror to your Dungeon World game with The Witch.  Manipulate your antagonists, brew potions for your friends, and whisper nightmarish curses against your foes.',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks/monk',
    name: nameMaker('The Monk', 'Dungeon World Custom Playbook'),
    component: monk,
    meta: {
      title: titleMaker('The Monk', 'DW Playbook'),
      tags: [
        {
          name: 'description',
          content: 'Explore the great unknowns of Dungeon World in search of hardship, enlightenment, and combat perfection as The Monk.',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks/nightwatch',
    name: nameMaker('The Nightwatch', 'Dungeon World Custom Playbook'),
    component: nightwatch,
    meta: {
      title: titleMaker('The Nightwatch', 'DW Playbook'),
      tags: [
        {
          name: 'description',
          content: 'Protect the rotten streets of Dungeon World as The Nightwatch: sneak your way into criminal lairs underneath a cloak of shadows then make a daring escape on your grappling hook!',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks/powdermage',
    name: nameMaker('The Powdermage', 'Dungeon World Custom Playbook'),
    component: powdermage,
    meta: {
      title: titleMaker('The Powdermage', 'DW Playbook'),
      tags: [
        {
          name: 'description',
          content: 'You know what Dungeon World really needs: a bit more firepower!  With their signature Boomstick and black-powder grenades, The Powdermage walks the line between helpful and hazardous.',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks/necrogardener',
    name: nameMaker('The Necrogardener', 'Dungeon World Custom Playbook'),
    component: necrogardener,
    meta: {
      title: titleMaker('The Necrogardener', 'DW Playbook'),
      tags: [
        {
          name: 'description',
          content: 'Few people in Dungeon World understand the cycle of life and death as well as a gardener does.  Use that knowledge yourself as The Necrogardener to grow edible fungi, neurotoxic spores, undead minions, and hulking abominations.',
        },
      ],
    },
  },
  {
    path: '/dwplaybooks/worldsmith',
    name: nameMaker('The Worldsmith', 'Dungeon World Custom Playbook'),
    component: worldsmith,
    meta: {
      title: titleMaker('The Worldsmith', 'DW Playbook'),
      tags: [
        {
          name: 'description',
          content: 'The Worldsmith puts the raw elements of Dungeon World at your disposal.  Forge and wield weapons, armor, and shields from fire, stone, and water itself.',
        },
      ],
    },
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: notfound,
  //   meta: {
  //     title: titleMaker('Not Found'),
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
