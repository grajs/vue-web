import Vue from 'vue'
import App from './App'
import router from './router'
import {Message, Table, TableColumn} from 'element-ui'

Vue.prototype.$message = Message
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})