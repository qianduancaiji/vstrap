
import FormItem from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/form.scss'
FormItem.install = function(Vue) {
	Vue.component(FormItem.name, FormItem)
}
export default FormItem
