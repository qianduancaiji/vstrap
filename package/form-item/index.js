
import FormItem from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
FormItem.install = function(Vue) {
	Vue.component(FormItem.name, FormItem)
}
export default FormItem
