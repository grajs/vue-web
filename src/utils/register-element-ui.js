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

export default Vue => {
  Vue.prototype.$message = {
    success: message => Message({type: 'success', message}),
    info: message => Message({type: 'info', message}),
    warning: message => Message({type: 'warning', message}),
    error: message => Message({type: 'error', message})
  }

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
