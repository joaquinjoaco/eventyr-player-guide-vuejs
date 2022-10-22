import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventyrView from '../views/EventyrView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eventyr',
    name: 'Eventyr',
    component: EventyrView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
