
import ButtonGroup from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
ButtonGroup.install = function(Vue) {
	Vue.component(ButtonGroup.name, ButtonGroup)
}
export default ButtonGroup
