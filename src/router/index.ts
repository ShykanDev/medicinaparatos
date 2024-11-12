import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
 
    {
      path: '/beneficios',
      name: 'beneficts',
      component: () => import('../views/BenefictsView.vue'),
    },   
    {
    path: '/ingredientes',
    name: 'ingredients',
    component: () => import('../views/IngredientsView.vue'),
    },
    {
      path: '/nosotros',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/preguntas',
      name: 'faqs',
      component: () => import('../views/faqsView.vue'),
    }
  ],
})

export default router
