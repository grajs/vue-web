import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import routerConfig from './router'
import stateConfig from './store'
import routerControl from './router/router-control'
import registerComponent from './utils/register-component'
import axios from './utils/axios'
import './assets/style/common.css'

registerComponent(Vue)
Vue.use(VueX)
Vue.use(VueRouter)

const router = new VueRouter(routerConfig)
const store = new VueX.Store(stateConfig)
Vue.use(axios, store)
routerControl(router, store)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})