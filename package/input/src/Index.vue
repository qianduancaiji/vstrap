<!--  -->
<script>
	export default {
		name: 'VsInput',
		props: {
			type: {
				type: String,
				default: 'text',
				validator: value => ['text', 'password', 'textarea'].includes(value)
			},
			placeholder: String,
			value: String,
			rows: Number
		},
		render: function (h) {
			const isInput = this.type !== 'textarea'
			return h(
				isInput ? 'input' : 'textarea',
				{
					class: ['form-control'],
					attrs: {
						type: isInput ? this.type : 'text',
						placeholder: this.placeholder,
						rows: isInput ? isInput : this.rows
					},
					domProps: {
						value: this.value
					},
					on: {
						input: e => this.$emit('input', e.currentTarget.value)
					}
				}
			)
		}
	}
</script>
