import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import PageContact from '../components/PageContact'
import CreerAider from '../components/CreerAider'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pagecontact',
      name: 'PageContact',
      component: PageContact,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/creeraider',
      name: 'CreerAider',
      component: CreerAider,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
