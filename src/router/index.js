import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login',
      // redirect: '/login/index.vue',
      component: Login }
  ]
})

export default router
