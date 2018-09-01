import {
  Message,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui'

export default Vue => {
  Vue.prototype.$message = Message

  Vue.component(Table.name, Table)
  Vue.component(TableColumn.name, TableColumn)
  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(Submenu.name, Submenu)
}