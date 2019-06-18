import Button from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/button.scss'
Button.install = function(Vue) {
    Vue.component(Button.name, Button)
}
export default Button