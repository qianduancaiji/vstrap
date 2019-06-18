

<script>
	let checked = {}
	export default {
		name: 'VsCheckboxGroup',
		props: {
			value: {
				type: Array,
				default: function () {
					let arr = []
					arr['default'] = true
					return arr
				}
			}
		},
		provide: function () {
			return {
				checkGroup: this
			}
		},
		render: function (h) {
			return h(
				'div',
				{
					class: ['form-check-inline'],
					on: {
						input: (e) => {
							let index = this.value.findIndex(item => item == e.target.value)
							if (index !== -1) {
								this.value.splice(index, 1)
							} else {
								this.value.push(e.target.value)
							}
						}
					}
				},
				this.$slots.default
			)
		}
	}
</script>
