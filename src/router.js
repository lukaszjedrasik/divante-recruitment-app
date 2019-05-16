import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/Contact.vue')
    },
    {
      path: '/:id',
      name: 'ShoppingProductDetails',
      component: () => import('@/components/ShoppingProductDetails.vue')
    }
  ]
})
