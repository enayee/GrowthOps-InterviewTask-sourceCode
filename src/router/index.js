import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      name: 'Homepage',
      component: () => import('@/pages/Homepage.vue'),
    },
    {
      path: '',
      name: 'Start',
      component: () => import('@/pages/Start.vue'),
    },
  ]
})
