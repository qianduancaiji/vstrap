

import Select from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/select.scss'
Select.install = function(Vue) {
	Vue.component(Select.name, Select)
}
export default Select
