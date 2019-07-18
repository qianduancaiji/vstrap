
<script>
	export default {
        name: 'VsInput',
        inject: {
            formItem: {
                from: 'formItem',
                default: null
            }
        },
        props: {
            name: {
                type: String
            },
            placeholder: {
                type: String
            },
            value: {
                type: [String, Number],
                required: true
            },
            type: {
                type: String,
                validator: function(value) {
                    return ['text', 'password', 'textarea', 'number']
                },
                default: 'text'
            }
        },
        computed: {
            validatorFields() {
                return this.formItem !== null ? this.formItem.validatorFields : null;
            }
        },
        render: function(h) {
            let validatorFields = this.validatorFields;
            let inputClass = {
                'form-control': 1,
                'is-valid': validatorFields !== null && validatorFields.status === 1,
                'is-invalid': validatorFields !== null && validatorFields.status === -1
            }
            let temp = this.type === 'textarea' ? (
                <textarea
                    class={ inputClass }
                    placeholder={ this.placeholder }
                    value={ this.value }
                    onBlur={ this.handleBlur }
                    onInput={ this.handleInput }
                    name={ this.name }></textarea>
            ) : (
                <input 
                    type={ this.type } 
                    class={ inputClass }
                    placeholder={ this.placeholder }
                    value={ this.value }
                    onBlur={ this.handleBlur }
                    onInput={ this.handleInput }
                    name={ this.name }/>
            )
            return temp;
        },
        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value);
                if (this.formItem !== null) {
                    let value = e.target.value;
                    if (this.type === 'number') {
                        value = Number(value);
                    }
                    this.formItem.$emit('changeValidator', value);
                }
                
            },
            handleBlur(e) {
                if (this.formItem !== null) {
                    let value = e.target.value;
                    if (this.type === 'number') {
                        value = Number(value);
                    }
                    this.formItem.$emit('blurValidator', value);
                }
            }
        }
	}
</script>
