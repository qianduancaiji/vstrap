import Button from './src/Index.vue'

Button.install = function(Vue) {
    Vue.component(Button.name, Button)
}

export default Button
