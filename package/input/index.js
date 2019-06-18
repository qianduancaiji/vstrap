
import Input from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
Input.install = function(Vue) {
	Vue.component(Input.name, Input)
}
export default Input
