
<script>
	export default {
        name: 'VsCheckbox',
        inheritAttrs: false,
        model: {
            prop: 'checked',
            event: 'change'
        },
        inject: {
            checkboxGroup: {
                from: 'checkboxGroup',
                default: null
            }
        },
        props: {
            block: {
                type: Boolean,
                default: false
            },
            beauty: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number]
            },
            name: {
                type: [String, Number]
            },
            checked: {
                type: [String, Number]
            },
            label: {
                type: [String, Number]
            }
        },
        computed: {
            checkboxGroupValue() {
                if (this.checkboxGroup === null) {
                    return null;
                } else {
                    return this.checkboxGroup.value;
                }
            }
        },
        render(h) {
            return this.checkboxGroup === null ? (
                this.beauty ? this.renderSingleBeauty() : this.renderSingle()
            ) : (
                this.beauty ? this.renderGroupBeauty() : this.renderGroup()
            )
        },
        methods: {
            handlInput(e) {
                if (this.checkboxGroup === null) {
                    this.$emit('change', e.target.value)
                } else {
                    this.checkboxGroup.$emit('checked', e);
                } 
            },
            renderSingle() {
                return (
                    <div class={ {'form-check': true, 'form-check-inline': !this.block} }>
                        <label class="form-check-label">
                            <input 
                                onChange={ this.handlInput }
                                class="form-check-input" 
                                type="checkbox" 
                                checked={ this.checked === this.value }
                                name={ this.name }
                                value={ this.value }/>
                            { this.label || this.$slots.default }
                        </label>
                    </div>
                )
            },
            renderGroup() {
                return (
                    <div class={ {'form-check': true, 'form-check-inline': !this.block} }>
                        <label class="form-check-label">
                            <input 
                                onChange={ this.handlInput }
                                class="form-check-input" 
                                type="checkbox" 
                                checked={ this.checkboxGroupValue.find(item => item == this.value) }
                                name={ this.name }
                                value={ this.value }/>
                            { this.label || this.$slots.default }
                        </label>
                    </div>
                );
            },
            renderSingleBeauty() {
                let randomId = Math.random();
                let className = {
                    'custom-control': true,
                    'custom-checkbox': true,
                    'vs-form-check-inline': !this.block
                }
                return (
                    <div class={ className }>
                        <input 
                            type="checkbox" 
                            id={ randomId } 
                            onChange={ this.handlInput }
                            class="custom-control-input"
                            checked={ this.checked === this.value }
                            name={ this.name }
                            value={ this.value }/>
                        <label class="custom-control-label" for={ randomId }>
                            { this.label || this.$slots.default }
                        </label>
                    </div>
                )
            },
            renderGroupBeauty() {
                let randomId = Math.random();
                let className = {
                    'custom-control': true,
                    'custom-checkbox': true,
                    'vs-form-check-inline': !this.block
                }
                return (
                    <div class={ className }>
                        <input 
                            type="checkbox" 
                            id={ randomId } 
                            onChange={ this.handlInput }
                            class="custom-control-input"
                            checked={ this.checkboxGroupValue.find(item => item == this.value) }
                            name={ this.name }
                            value={ this.value }/>
                        <label class="custom-control-label" for={ randomId }>
                            { this.label || this.$slots.default }
                        </label>
                    </div>
                )
            }
        }
	}
</script>
