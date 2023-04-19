import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

export const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

