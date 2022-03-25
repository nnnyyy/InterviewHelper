import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Root from '../views/RootPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Root
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
