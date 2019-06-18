
<script>
    export default {
        name: 'VsButton',
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            plain: Boolean,
            size: {
                type: String,
                default: ''
            },
            disabled: Boolean,
            block: Boolean,
            loading: Boolean
        },
        render: function (h) {
            let btnClass = {
                btn: true,
                [`btn-${this.plain ? 'outline-' : ''}${this.type}`]: true,
                [`btn-${this.size}`]: this.size,
                'btn-block': this.block,
                'vs-btn-disabled': this.disabled || this.loading
            }
            return (
                <button type="button" 
                    onClick={ e => this.$emit('click', e) }
                    class={ btnClass }
                    disabled={ this.disabled || this.loading }>
                  
                    { this.loading && <i class="iconfont icon-icon_loading vs-icon-loading"></i> }
                   
                        
                    { this.$slots.default }
                </button>
            )
        }
    }
</script>