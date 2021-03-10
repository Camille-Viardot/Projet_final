import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import PageContact from '../components/Contact/PageContact'
import CreerAider from '../components/CreerAider'
import PageLiens from '../components/Liens/PageLiens'
import UpdateContact from '../components/Contact/UpdateContact'

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
    },

    {
      path: '/modifiercontact',
      name: 'UpdateContact',
      component: UpdateContact,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/pageliens',
      name: 'PageLiens',
      component: PageLiens,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
