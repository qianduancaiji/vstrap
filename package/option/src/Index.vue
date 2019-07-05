
<script>
	export default {
		name: 'VsOption',
		props: {
			label: String
		},
		data() {
			return {
				innerText: undefined,
				optionText: undefined
			}
		},
		inject: ['select'],
		computed: {
			selected() {
				return this.select.value === (this.label || this.optionText)
			}
		},
		render: function (h) {
			return h(
				'option',
				{
					attrs: {
						value: this.label,
						selected: this.select.multiple ? this.select.value.includes(this.label) : this.selected
					}
				},
				this.$slots.default
			)
		},
		mounted() {
			// this.innerText = this.$el.innerText
			this.optionText = this.$el.innerText
		}
	}
</script>
