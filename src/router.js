import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import Login from './Login.vue'
import Landing from './Landing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './Login.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import(/* webpackChunkName: "about" */ './Register.vue')


    },
    {
      path:'/',
      name: 'landing',
      component: () => import(/* webpackChunkName: "about" */ './Landing.vue')

    }
  ]
})
