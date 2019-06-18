import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import VStrap from '../src/index'
//const VStrap = require('../dist/vstrap.js')
console.log(VStrap);
import '../dist/vstrap.css'

Vue.prototype.axios = axios
Vue.use(VStrap)

const vm = new Vue({
	el: '#app',
	render: h => h(App)
})