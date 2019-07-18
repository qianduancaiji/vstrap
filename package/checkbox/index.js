
import Checkbox from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
Checkbox.install = function(Vue) {
	Vue.component(Checkbox.name, Checkbox)
}
export default Checkbox
