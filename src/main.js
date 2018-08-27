import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/common.css'
import {
  Message,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui'

Vue.prototype.$message = Message
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})