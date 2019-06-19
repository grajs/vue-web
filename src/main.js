import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import registerComponents from './utils/register-components'
import axios from './utils/axios'
import './assets/style/common.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(registerComponents)
Vue.use(axios)

new Vue({
  el: '#app',
  router: router(VueRouter),
  store: store(Vuex),
  render: h => h(App)
})
