
<script>
	export default {
        name: 'VsRadio',
        inheritAttrs: false,
        model: {
            prop: 'checked',
            event: 'change'
        },
        inject: {
            radioGroup: {
                from: 'radioGroup',
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
            radioGroupValue() {
                if (this.radioGroup === null) {
                    return null;
                } else {
                    return this.radioGroup.value;
                }
            }
        },
        render(h) {
            return this.radioGroup === null ? (
                this.beauty ? this.renderSingleBeauty() : this.renderSingle()
            ) : (
                this.beauty ? this.renderGroupBeauty() : this.renderGroup()
            )
        },
        methods: {
            handlInput(e) {
                if (this.radioGroup === null) {
                    this.$emit('change', e.target.value)
                } else {
                    this.radioGroup.$emit('checked', e);
                } 
            },
            renderSingle() {
                return (
                    <div class={ {'form-check': true, 'form-check-inline': !this.block} }>
                        <label class="form-check-label">
                            <input 
                                onChange={ this.handlInput }
                                class="form-check-input" 
                                type="radio" 
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
                                type="radio" 
                                checked={ this.radioGroupValue == this.value }
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
                    'custom-radio': true,
                    'vs-form-check-inline': !this.block
                }
                return (
                    <div class={ className }>
                        <input 
                            type="radio" 
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
                    'custom-radio': true,
                    'vs-form-check-inline': !this.block
                }
                return (
                    <div class={ className }>
                        <input 
                            type="radio" 
                            id={ randomId } 
                            onChange={ this.handlInput }
                            class="custom-control-input"
                            checked={ this.radioGroupValue == this.value }
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
