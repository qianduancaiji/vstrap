<template>
	<div>
        <vs-form :model="form" :rules="rules" ref="form">
            <vs-form-item label="姓名" prop="name" ref="nameItem">
                <vs-input type="textarea" v-model="form.name"></vs-input>
            </vs-form-item>
            <vs-form-item label="年龄" prop="age">
                <vs-input v-model="form.age"></vs-input>
            </vs-form-item>
            <vs-form-item label="sex" prop="sex">
                <vs-select v-model="form.arr" multiple>
                    <vs-option label="1">aaaa</vs-option>
                    <vs-option label="2">bbbb</vs-option>
                    <vs-option label="3">cccc</vs-option>
                    <vs-option label="4">dddd</vs-option>
                </vs-select>
            </vs-form-item>
            <vs-form-item label="sex" prop="sex">
                <vs-select v-model="select">
                    <vs-option label="1">1</vs-option>
                    <vs-option>2</vs-option>
                    <vs-option label="3">34</vs-option>
                    <vs-option label="5">5</vs-option>
                </vs-select>
            </vs-form-item>
            <vs-button @click.prevent="submit">提交</vs-button>
        </vs-form>

        <!-- <vs-table :data="list" :columns="columns1" :tree="false"></vs-table> -->
	</div>
</template>
<script> 
	export default {
		data() {
			return {
				
                select: '1',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: '500px'
                    },
                    {
                        title: 'Age',
                        key: 'shortName'
                    },
                    {
                        title: 'Address',
                        key: 'value'
                    },
                    {
                        title: 'Address',
                        key: 'value',
                        render: (h, data) => {
                            return (
                                <vs-button onClick={ this.handlClick.bind(this, data) }>提交</vs-button>
                            )
                        }
                    }
                ],
                list: [
                    
                ],
                form: {
                    name: '',
                    age: 0,
                    arr: ['1','2','3']
                },
                rules: {
                    name: {
                        required: true,
                        trigger: 'change'
                    },
                    age: [
                        {
                            required: true,
                            trigger: 'change'
                        },
                        {
                            trigger: 'change',
                            validator: (rule, value, callback) => {
                                if (isNaN(value)) {
                                    callback(new Error('不是数字'))
                                } else {
                                    callback()
                                }
                            }
                        }
                    ]
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
                    setTimeout(() => {
                        this.$refs['form'].clearValidate()
                    }, 1000)
                });
            }
		}
	}
</script>