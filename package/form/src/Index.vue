
<script>
	export default {
        name: 'VsForm',
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object,
                default: null
            }
        },
        provide: function() {
            return {
                form: this
            }
        },
        created() {
            this.$on('verifyResult', this.handleVerifyResult)
        },
        data() {
            return {
                verifyResult: [],
                isSuccessCallback: null
            }
        },
        render: function(h) {
            return (
                <form>
                    { this.$scopedSlots.default() }
                </form>
            )
        },
        methods: {
            clearValidate() {
                this.$emit('clearValidator')
            },
            handleVerifyResult(value) {
                let prop = value.prop;
                let rfind = this.verifyResult.find(item => item.prop === prop);
                if (rfind) {
                    rfind.status = value.status
                } else {
                    this.verifyResult.push(value)
                }
                // 获取验证结果
                this.userGetResult();
            },
            userGetResult() {
                if (this.isSuccessCallback !== null) {
                    let value = this.verifyResult;
                    let hasNoVerify = value.some(item => item.status === 0);
                    if(hasNoVerify) return;
                    try {
                        if (value.every(item => item.status === 1)) {
                            this.isSuccessCallback(true)
                        } else {
                            this.isSuccessCallback(false)
                        }
                    } catch (error) {
                        throw error
                    } finally {
                        this.isSuccessCallback = null
                    }
                }
            },
            isSuccess(callback) {
                if (this.verifyResult.length === 0) {
                    return callback(true);
                }
                this.isSuccessCallback = callback;
                this.$emit('formSubmit');
            }
        }
	}
</script>
