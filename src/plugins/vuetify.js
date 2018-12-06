import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#1D3557',
    secondary: '#E63946',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
