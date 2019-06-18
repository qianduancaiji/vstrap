class CreateFormItemVnode {

  static createInput(h) {
		return h('input', {
			attrs: {
				name: this.name,
				type: 'text',
				placeholder: this.placeholder
			},
			domProps: {
				value: this.value
			},
			on: {
				input: e => this.$emit('input', e.target.value)
			},
			class: ['form-control']
		})
	}

	static createSelect(h) {

		return h('select', {
			attrs: {
				name: this.name
			},
			domProps: {
				value: this.value
			},
			on: {
				input: e => this.$emit('input', e.target.value)
			},
			class: ['form-control']
		}, [createOption.call(this, h), ...this.$slots.default])
	}

	static createTextarea(h) {
		return h(
			'textarea', {
				attrs: {
					placeholder: this.placeholder,
					rows: this.rows,
					cols: this.cols
				},
				domProps: {
					value: this.value
				},
				on: {
					input: e => this.$emit('input', e.target.value)
				},
				class: ['form-control']
			}
		)
  }
  
  static createCheckbox(h) {

  }
}

function createOption(h) {
  return h('option', {
    domProps: {
      value: ''
    }
  }, this.placeholder || '请选择')
}

export {
  CreateFormItemVnode
}
