
<script>
    import Validator from 'async-validator';
	export default {
        name: 'VsFormItem',
        inject: ['form'],
        provide() {
            return {
                formItem: this
            }
        },
        props: {
            label: {
                type: String
            },
            prop: {
                type: String
            }
        },
        data() {
            return {
                // 验证失败-1， 成功 1 ，初始化状态0
                validatorFields: {
                    status: 0,
                    message: ''
                },
                validator: {
                    all: null,
                    change: null
                },
                rules: {
                    all: [],
                    change: []
                }
            }
        },
        created() {
            this.$on('changeValidator', this.handleChangeValidator);
            this.$on('blurValidator', this.handleBlurValidator);
            this.form.$on('clearValidator', this.clearValidate);
            this.form.$on('formSubmit', this.handleChangeValidator)
            
            if (this.form.rules) {
                let prop = this.prop;
                let rules = this.form.rules[prop];
                if (rules) {
                    this.initRules();
                    // 通知form父组件该字段需要被验证以及该字段的验证结果
                    this.notifyResult();
                }
            }
        },
        render: function(h) {
            let feedbackClass = {
                'valid-feedback': this.validatorFields.status === 1,
                'invalid-feedback': this.validatorFields.status === -1
            }
            return (
                <div class="form-group">
                    <label>{ this.label }</label>
                    { this.$scopedSlots.default() }
                    <div class={ feedbackClass }>
                        { this.validatorFields.message }
                    </div>
                </div>
            )
        },
        methods: {
            initRules() {
                let prop = this.prop;
                let rules = this.form.rules[prop];
                rules.constructor === Object && (rules = [rules]);
                this.rules.change = rules.filter(rule => {
                    if (!rule.trigger) {
                        rule.trigger = 'blur'
                    }
                    return rule.trigger === 'change';
                });
                this.rules.all = rules;
                this.validator.all = new Validator({
                    [prop]: this.rules['all']
                })
                this.validator.change = new Validator({
                    [prop]: this.rules['change']
                })
            },
            handleChangeValidator(value) { 
                
                if (this.validator.all === null) {
                    return
                }
                // form组件提交前未验证的元素，则执行一次校验
                // 如果校验过本次不再校验
                if(value === undefined) {
                    if (this.validatorFields.status === 0) {
                        
                        value = this.form.model[this.prop];
                        
                    } else {
                        return this.notifyResult();
                    }
                }

                this.verify(value, 'change');
            },
            handleBlurValidator(value) {
                if (this.validator.all === null) {
                    return
                }
                if(value === undefined) {
                    value = this.form.model[this.prop]
                }
                this.verify(value, 'all');
            },
            verify(value, type) { 
                this.validator[type].validate({
                    [this.prop]: value
                },(errors, fields) => {
                    if (errors === null) {
                        this.validatorFields.status = 1
                        this.validatorFields.message = ''
                    } else {
                        
                        this.validatorFields.status = -1
                        this.validatorFields.message = errors[errors.length - 1].message
                    }
                    this.notifyResult();
                })
            },
            clearValidate() {
                this.validatorFields = {
                    status: 0,
                    message: ''
                }
            },
            notifyResult() {
                this.form.$emit('verifyResult', {
                    prop: this.prop,
                    status: this.validatorFields.status
                })
            }
        }
	}
</script>
