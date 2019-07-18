<template>
	<div>
        <vs-form :model="form" :rules="rules" ref="form">
            <vs-form-item label="姓名" prop="name">
                <vs-input type="textarea" v-model="form.name"></vs-input>
            </vs-form-item>
            <vs-form-item label="测试label" prop="radio">
                <vs-radio-group v-model="select">
                    <vs-radio value="1" name="aa" beauty>测试</vs-radio>
                    <vs-radio value="2" name="aa" beauty>测试</vs-radio>  
                </vs-radio-group>
            </vs-form-item>
            <vs-button @click.prevent="submit">提交</vs-button>
        </vs-form>
	</div>
</template>
<script> 
	export default {
		data() {
			return { 
                checkboxgroup: [1, 2],
                select: '',
                form: {
                    name: '',
                    age: 0,
                    arr: ['1','2','3']
                },
                rules: {
                    namea: {required: true, message: '请至少选择一个活动性质', trigger: 'change' },
                    age: {
                        required: true,
                        type: 'number',
                        message: 'aaaaaaaaaaa'
                    },
                    radio: {
                        required: true,
                        message: 'aaaaaaaaaaa',
                        trigger: 'change'
                    },
                }
			}
        },
        created() {

        },
		methods: {
            handlClick(data) {

            },
            all() {
                this.$refs['form'].clearValidate()
            },
            singel() {
                this.$refs['nameItem'].clearValidate()
            },
            submit() {
                this.$refs['form'].isSuccess(r => {
                    console.log(r);
                    // setTimeout(() => {
                    //     this.$refs['form'].clearValidate()
                    // }, 1000)
                });
            }
		}
	}
</script>