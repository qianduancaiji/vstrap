
import Option from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
Option.install = function(Vue) {
	Vue.component(Option.name, Option)
}
export default Option
