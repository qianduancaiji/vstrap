
import TableColumn from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
TableColumn.install = function(Vue) {
	Vue.component(TableColumn.name, TableColumn)
}
export default TableColumn
