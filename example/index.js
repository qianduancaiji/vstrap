import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import VStrap from '../src/index'

Vue.prototype.axios = axios
Vue.use(VStrap)

const vm = new Vue({
	el: '#app',
	render: h => h(App)
})