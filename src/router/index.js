import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventyrView from '../views/EventyrView.vue'
import ReglasView from '../views/ReglasView.vue'
import ProteccionesView from '../views/ProteccionesView.vue'
import PwarpsView from '../views/PwarpsView.vue'
import RangosView from '../views/RangosView.vue'
import EnchantsView from '../views/EnchantsView.vue'
import QuestsView from '../views/QuestsView.vue'
import DungeonView from '../views/DungeonView.vue'
import McmmoView from '../views/McmmoView.vue'
import JobsView from '../views/JobsView.vue'
import SubastasView from '../views/SubastasView.vue'
import VehiculosView from '../views/VehiculosView.vue'

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
  },
  {
    path: '/reglas',
    name: 'Reglas',
    component: ReglasView
  },
  {
    path: '/protecciones',
    name: 'Protecciones',
    component: ProteccionesView
  },
  {
    path: '/pwarps',
    name: 'Pwarps',
    component: PwarpsView
  },
  {
    path: '/rangos',
    name: 'Rangos',
    component: RangosView
  },
  {
    path: '/encantamientos',
    name: 'Enchants',
    component: EnchantsView
  },
  {
    path: '/quests',
    name: 'Quests',
    component: QuestsView
  },
  {
    path: '/dungeon',
    name: 'Dungeon',
    component: DungeonView
  },
  {
    path: '/mcmmo',
    name: 'Mcmmo',
    component: McmmoView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/subastas',
    name: 'Subastas',
    component: SubastasView
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    component: VehiculosView
  },
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
