import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import AccueilView from '../views/AccueilView.vue'
import CompetenceView from '../views/CompetenceView.vue'
import ContactView from '../views/ContactView.vue'
import AproposView from '../views/AproposView.vue'
import ProjetDetailView from '../views/ProjetDetailView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/',
      name: 'accueil',
      component: AccueilView,
    },
    {
      path: '/competence',
      name: 'competence',
      component: CompetenceView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView,
    },
    {
      path: '/projet',
      name: 'projet',
      component: ProjectView,
    },
    {
      path: '/projet/:id',
      name: 'projetdetail',
      component: ProjetDetailView,
    },
  ]
})

export default router
