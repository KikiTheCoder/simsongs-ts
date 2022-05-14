import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/searchsong',
      name: 'searchsong',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/songinfo/:artist/:track',
      name: 'songinfo',
      component: () => import('../views/InfoView.vue')
    }
  ]
})

export default router
