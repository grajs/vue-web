import {
  Message,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Submenu,
  Button,
  Pagination,
  Dialog,
  Input,
  InputNumber
} from 'element-ui'

export default {
  install(Vue) {
    Vue.prototype.$message = Message

    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Submenu)
    Vue.use(Button)
    Vue.use(Pagination)
    Vue.use(Dialog)
    Vue.use(Input)
    Vue.use(InputNumber)
  }
}
