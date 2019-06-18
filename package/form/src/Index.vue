
<script>
	export default {
		name: 'VsForm',
		props: {
			model: Object,
			rules: Object,
			'label-position': {
				type: String,
				default: 'top'
			},
			ratio: {
				type: String,
				default: '2/8'
			}
		},
		provide: function () {
			return {
				form: this
			}
		},
		render: function (h) {
			return h(
				'form',
				{
					class: ['vs-form']
				},
				this.$slots.default
			)
		}
	}
</script>
