
<script>
	import { CreateFormItemVnode } from './utils.js'
	
	const {
		createInput,
		createSelect,
		createTextarea
	} = CreateFormItemVnode

	export default {
		name: 'VsFormItem',
		inject: ['form'],
		props: {
			label: {
				type: String
			},
			type: {
				type: String,
				default: 'input'
			},
			name: String,
			placeholder: String,
			value: String,
			rows: {
				type: [String, Number],
				default: 5
			},
			cols: {
				type: [String, Number],
				default: 40
			}
		},
		render: function (h) {
			let labelPosition = this.form.labelPosition
			let vnodes = []
			
			let createFormItem = null
			switch (this.type) {
				case 'input':
					createFormItem = createInput
					break;
				case 'select':
					createFormItem = createSelect
					break;
				case 'textarea':
					createFormItem = createTextarea
					break;
			}
			
			if (labelPosition === 'left' || labelPosition === 'right') {
				let ratio = this.form.ratio.split('/')
				let labelRatio = ratio[0]
				let inputRatio = ratio[1]

				vnodes.push(
					h('label', {
						class: [`col-sm-${labelRatio} col-form-label`, {
							'vs-col-form-label-right': labelPosition === 'right'
						}]}, this.label),
					h('div', {class: [`col-sm-${inputRatio}`]},
						[createFormItem.call(this, h)])
				)

			} else {
				vnodes.push(h('label', this.label), createFormItem.call(this, h))
			}
			return h(
				'div',
				{
					class: ['form-group', {row: labelPosition === 'left' || labelPosition === 'right'}]
				},
				vnodes
			)
		}
	}
</script>
