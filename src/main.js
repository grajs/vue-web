import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import routerConfig from './router'
import routerControl from './router/router-control'
import stateConfig from './store'
import registerComponent from './utils/register-component'
import './assets/style/common.css'

registerComponent(Vue)
Vue.use(VueX)
Vue.use(VueRouter)

const router = new VueRouter(routerConfig)
routerControl(router)
const store = new VueX.Store(stateConfig)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})