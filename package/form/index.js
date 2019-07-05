
import Form from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
Form.install = function(Vue) {
	Vue.component(Form.name, Form)
}
export default Form
