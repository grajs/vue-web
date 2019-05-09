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

    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(Menu.name, Menu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(Submenu.name, Submenu)
    Vue.component(Button.name, Button)
    Vue.component(Pagination.name, Pagination)
    Vue.component(Dialog.name, Dialog)
    Vue.component(Input.name, Input)
    Vue.component(InputNumber.name, InputNumber)
  }
}
