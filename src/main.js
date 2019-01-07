import Vue from 'vue'
import './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import App from './Home.vue'
import Home from './Home.vue'
import Login from './Login.vue'

Vue.use(VueAxios, axios, Router)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
});

const router = new Router({
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
    },
  ]
});



