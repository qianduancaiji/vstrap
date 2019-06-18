
import Form from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
// import '../style/form.scss'
Form.install = function(Vue) {
	Vue.component(Form.name, Form)
}
export default Form
