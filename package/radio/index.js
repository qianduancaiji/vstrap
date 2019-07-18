
import Radio from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
Radio.install = function(Vue) {
	Vue.component(Radio.name, Radio)
}
export default Radio
