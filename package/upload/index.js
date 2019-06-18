
import Upload from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/upload.scss'
Upload.install = function(Vue) {
	Vue.component(Upload.name, Upload)
}
export default Upload
