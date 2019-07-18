
<script>
	export default {
		name: 'VsSelect',
		props: {
			multiple: {
				type: Boolean,
				default: false
			},
			value: {
				type: [Array, String],
				required: true
			},
			placeholder: String,
			name: String
        },
        inject: {
            formItem: {
                from: 'formItem',
                default: null
            }
        },
		data() {
			return {
				multipleData: [],
				selected: []
			}
		},
		provide: function () {
			return {
				select: this
			}
		},
		render: function (h) {    
			if (this.multiple === false) {
			    return this.renderSelect();
			}

			if (this.multiple === true) {
				if (!(this.value instanceof Array)) {
					throw new TypeError('绑定值为数组')
				}
				let multipleData = this.$slots.default.map(vnode => {
					return {
						label: vnode.componentOptions.propsData.label,
						text: vnode.componentOptions.children[0].text
					}
				})
				return this.renderMultipleSelect();
			}
			
        },
        computed: {
            validatorFields() {
                return this.formItem !== null ? this.formItem.validatorFields : null;
            }
        },
		methods: {
			focus(e) {
				for (let el of e.target.children) {
					if (el.className.split(' ').includes('vs-ul-to-select')) {
						el.style.display = 'block'
					}
				}	
			},
			blur(e) {
				for (let el of e.target.children) {
					if (el.className.split(' ').includes('vs-ul-to-select')) {
						el.style.display = 'none'
					}
				}
			},
			toggleSelect(value, vnodeIndex) {
				let arr = this.value.map(item => item)
				let index = this.value.findIndex(item => item === value.label)
				if (index === -1) {
					arr.push(value.label)
				} else {
					arr.splice(index, 1)
				}
                this.$emit('input', arr);
            },
            handleInput(e) {
                if (this.formItem !== null) {
                    this.formItem.$emit('changeValidator', e.target.value);
                }
                this.$emit('input', e.currentTarget.value)
            },
            renderSelect() {
                let validatorFields = this.validatorFields;
                if (!(typeof(this.value) === 'string')) {
					throw new TypeError('绑定值为字符串')
                }
                let selectClass = {
                    'form-control': 1,
                    'custom-select': 1,
                    'is-valid': validatorFields !== null && validatorFields.status === 1,
                    'is-invalid': validatorFields !== null && validatorFields.status === -1
                }
				return (
					<select 
						class={ selectClass } 
						name={ this.name }
						value={ this.value } 
                        onChange={ this.handleInput }>
                        {
                            this.placeholder && <option value="">{ this.placeholder }</option>
                        }
						
						{ this.$slots.default }
					</select>
				)
            },
            renderMultipleSelect() {
                let multipleData = this.$slots.default.map(vnode => {
					return {
						label: vnode.componentOptions.propsData.label,
						text: vnode.componentOptions.children[0].text
					}
				})
				return (
					<div 
						class="vs-select-mutiple" 
						tabindex="0" 
						onFocus={ this.focus } 
						onBlur={ this.blur }>
						<select name={ this.name } multiple class="vs-hidden" autocomplete="off">
							{ this.$slots.default }
						</select>
						<div class="form-control">
							{ this.value.map(item => {
									try {
										return multipleData.find(subItem => item === subItem.label).text
									} catch (error) {
										return null
									}
								}).filter(item => item !== null).join(',') || this.placeholder || '请选择' 
							}
						</div>
						<ul class="vs-ul-to-select">
							{ 
                                multipleData.map((vnode, index) => {

                                    return (
                                        <li 
                                            class="vs-select-mutiple-option" 
                                            onClick={ 
                                                this.toggleSelect.bind(this, vnode, index)
                                            }>
                                            <span>{ vnode.text }</span>
                                            <span 
                                                class={ ['iconfont', 'icon-xuanze', !this.value.find(item => item === vnode.label) ? 'vs-hidden' : '']
                                                }>
                                            </span>
                                        </li>
                                    )
                                }) 
                            }
						</ul>
					</div>
				)
            }
		}
	}
</script>
