
<script>
	export default {
        name: 'VsRadioGroup',
        props: {
            value: {
                type: [String, Number],
                required: true
            }
        },
        provide() {
            return {
                radioGroup: this
            }
        },
        inject: {
            formItem: {
                from: 'formItem',
                default: null
            }
        },
        computed: {
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
                let checked = target.checked;
                let value = checked ? target.value : '';
                this.$emit('input', value);
                
                if (this.formItem !== null) {
                    this.formItem.$emit('changeValidator', value);
                }
            }
        }
	}
</script>

