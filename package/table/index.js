
import Table from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/table.scss'
Table.install = function(Vue) {
	Vue.component(Table.name, Table)
}
export default Table
