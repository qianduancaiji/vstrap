
import RadioGroup from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
RadioGroup.install = function(Vue) {
	Vue.component(RadioGroup.name, RadioGroup)
}
export default RadioGroup
