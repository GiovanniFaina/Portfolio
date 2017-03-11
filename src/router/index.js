import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/work/:id',
      name: 'work',
      component: Work
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
