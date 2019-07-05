
<script>
	export default {
        name: 'VsInput',
        inject: ['formItem'],
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
                    return ['text', 'password', 'textarea']
                },
                default: 'text'
            }
        },
        render: function(h) {
            let validatorFields = this.formItem.validatorFields
            let inputClass = {
                'form-control': 1,
                'is-valid': validatorFields.status === 1,
                'is-invalid': validatorFields.status === -1
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
                this.formItem.$emit('changeValidator', e.target.value);
            },
            handleBlur(e) {
                this.formItem.$emit('blurValidator', e.target.value);
            }
        }
	}
</script>
