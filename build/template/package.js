
let indexTemplate = firstUpperCase => (
`
import ${firstUpperCase} from './src/Index.vue'
import 'bootstrap/dist/css/bootstrap.css'
${firstUpperCase}.install = function(Vue) {
	Vue.component(${firstUpperCase}.name, ${firstUpperCase})
}
export default ${firstUpperCase}
`
)

let indexVue = firstUpperCase => (
`
<template>
	<div>

	</div>
</template>
<script>
	export default {
		name: 'Vs${firstUpperCase}'
	}
</script>
`
)

module.exports = {
	indexTemplate,
	indexVue
}
