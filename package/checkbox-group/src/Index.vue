
<script>
	export default {
        name: 'VsCheckboxGroup',
        props: {
            value: {
                type: Array,
                required: true
            }
        },
        provide() {
            return { 
                checkboxGroup: this
            }
        },
        inject: {
            formItem: {
                from: 'formItem',
                default: null
            }
        },
        computed: {
            propsValue: {
                get() {
                    return this.value;
                },
                set(value) {
                    if (value.checked) {
                        this.value.push(value.value);
                    } else {
                        this.value.splice(this.value.findIndex(item => item == value.value), 1);
                    }
                }
            },
            validatorFields() {
                return this.formItem !== null ? this.formItem.validatorFields : null;
            }
        },
        created() {
            this.$on('checked', this.handleChecked);
        },
        render(h) {
            let validatorFields = this.validatorFields;
            let inputClass = {
                'form-control': 1,
                'is-valid': validatorFields !== null && validatorFields.status === 1,
                'is-invalid': validatorFields !== null && validatorFields.status === -1
            }
            return (
                <div class={ inputClass } style={ {
                    padding: 0,
                    border: 'none',
                    'background-image': 'none'
                } }>
                    { this.$slots.default }
                </div>
            )
        },
        methods: {
            handleChecked(e) {
                let target = e.target;
                this.propsValue = {
                    value: target.value,
                    checked: target.checked
                };
                this.$emit('input', this.propsValue);
                if (this.formItem !== null) {
                    this.formItem.$emit('changeValidator', this.value);
                }
            }
        }
	}
</script>
