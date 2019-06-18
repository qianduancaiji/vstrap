
<script>
	export default {
		name: 'VsCheckbox',
		model: {
			prop: 'checked',
			event: 'change'
		},
		props: {
			value: {
				type: String,
				required: true
			},
			checked: {
				validator: value => (typeof value).toLowerCase() === 'boolean'
			}
		},
		inject: {
			checkGroup: {
				type: Object,
				default: {}
			}
		},
		render: function (h) {
			let checkboxId = Date.now() + Math.random()
			let group = this.isGroup()
			console.log(this.checked)
			return h(
				'div',
				{
					attrs: {
						type: 'checkbox'
					},
					class: {
						// 'form-check': true,
						'custom-control custom-checkbox': true
					}
				},
				[
					h(
						'input',
						{
							class: {
								// 'form-check-input': true,
								'custom-control-input': true
							},
							attrs: {
								type: 'checkbox',
								value: this.value,
								id: checkboxId
								
							},
							domProps: {
								checked: group ? this.checkGroup.value.includes(this.value) : Boolean(this.checked)
							},
							on: {
								change: e => {
									if (group) {
										// this.$parent.$emit('input', e.target.value)
									} else {
										this.$emit('change', e.target.checked)
									}
									
								}
							}
						}
					),
					h(
						'label',
						{
							class: {
								// 'form-check-label': true,
								'custom-control-label': true
							},
							attrs: {
								for: checkboxId
							},
							on: {
								selectstart: e => e.preventDefault()
							}
						},
						this.$slots.default
					)
				]
			)
		},
		methods: {
			isGroup() {
				return this.$parent.$options.name === 'VsCheckboxGroup'
			}
		}
	}
</script>
