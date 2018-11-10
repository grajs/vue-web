import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import registerComponent from './utils/register-element-ui'
import axios from './utils/axios'
import './assets/style/common.css'

registerComponent(Vue)
Vue.use(axios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
