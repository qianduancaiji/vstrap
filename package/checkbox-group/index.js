
import CheckboxGroup from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
CheckboxGroup.install = function(Vue) {
	Vue.component(CheckboxGroup.name, CheckboxGroup)
}
export default CheckboxGroup
