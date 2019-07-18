# vstrap

## Project setup
```
npm install vstrap
import Vue from 'vue
import 'bootstrap/dist/css/bootstrap.css'
import 'vstrap/dist/vstrap.css'
import VStrap from 'vstrap'
Vue.use(VStrap)

```

## 组件

- button

  ```
  属性：
  type: primary, secondary, success, danger, warning, info, light, dark, link;
  plain
  size: lg / sm
  block
  loading: true / false
  disabled: true / false
  <vs-button :loading="true" plain>默认按钮</vs-button>
  <vs-button type="secondary" plain>secondary</vs-button>
  <vs-button type="success" plain>success</vs-button>
  <vs-button-group>
      <vs-button :loading="true">默认按钮</vs-button>
      <vs-button :loading="true" plain>默认按钮</vs-button>
      <vs-button type="secondary" plain>secondary</vs-button>
      <vs-button type="success" plain>success</vs-button>
      <vs-button type="danger" plain>danger</vs-button>
      <vs-button type="warning" plain>warning</vs-button>
      <vs-button type="info" plain>info</vs-button>
      <vs-button type="light" plain>light</vs-button>
      <vs-button type="dark" plain>dark</vs-button>
      <vs-button type="link" plain>link</vs-button>
  </vs-button-group>
  ```

- table

  ```
  data: 数据列表
  columns：表格列配置
  tree: 是否开启树形表格
  row-key: vue列表渲染的key默认为id
  tree-props: 接收对象{children: 'children1'}指定子数据属性，默认为children
  border: 开启表格边框
  
  <vs-table :data="list" 
        :columns="columns1" 
        :tree="true"
        row-key="id"
        :tree-props="{children: 'children1'}" 
        v-vs-loading="loading"> //表格加载图标，接收一个boolean或者配置对象
    </vs-table>
  columns配置
  title: 列标题
  key: 数据字段
  width：列宽，不指定则平均分配
  自定义列模板使用渲染函数，h为createElement函数返回vnode，具体查看vue官网render函数，data为该行数据；
  
    loading: {
        visible: false,
        boxMinHeight: '150px', 
        loadingText: 'aaaaaaaaaaaaa......', 
        background: '#000'
    },
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
            key: 'value',
            render: (h, data) => {//注意this指向
                return (
                    <vs-button onClick={ this.handlClick.bind(this, data) }>提交</vs-button>
                )
            }
        }
    ],
    list: [
        {
            name: 'aaa',
            shortName: 'bbb',
            value: 'cccc',
            children1: [
                {
                    name: 'aaa',
                    shortName: 'bbb',
                    value: 'cccc'
                }
            ]
        },
        {
            name: 'aaa',
            shortName: 'bbb',
            value: 'cccc'
        },
        {
            name: 'aaa',
            shortName: 'bbb',
            value: 'cccc'
        }
    ]
  
  
  ```

- form

  ```javascript
  <vs-form :model="form" :rules="rules" ref="form">
      <vs-form-item label="姓名" prop="name" ref="nameItem">
          <vs-input type="textarea" v-model="form.name"></vs-input>
      </vs-form-item>
      <vs-form-item label="年龄" prop="age">
          <vs-input v-model="form.age"></vs-input>
      </vs-form-item>
      <vs-form-item label="sex" prop="sex">
          <vs-select v-model="form.arr" multiple> //multiple时model必须为数组
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
  
  <vs-checkbox-group v-model="checkboxgroup">//使用group时model是必须的且必须为数组，
      									//此时checkbox的v-model将失效
      <vs-checkbox value="1" v-model="select" name="aa" beauty block>测试</vs-checkbox>
      <vs-checkbox value="2" v-model="select" name="aa" beauty>测试</vs-checkbox>    
  </vs-checkbox-group>
  <vs-checkbox value="3" v-model="select" name="aa" beauty>测试</vs-checkbox>
  <vs-checkbox value="4" v-model="select" name="aa" beauty>测试</vs-checkbox>
  <vs-radio value="2" v-model="select" beauty>测试</vs-radio>
  <vs-radio value="1" v-model="select">测试</vs-radio>
  <vs-radio-group v-model="select">
      									//使用group时model是必须的类型为字符串或数字，
      									//此时radio的v-model将失效
      <vs-radio value="1" v-model="select" name="aa" beauty>测试</vs-radio>
  	<vs-radio value="2" v-model="select" name="aa" beauty>测试</vs-radio>    
  </vs-radio-group>
  
  <script> 
  	export default {
  		data() {
  			return { 
                  checkboxgroup: [1, 2],
                  select: '1',
                  form: {
                      name: '',
                      age: 0,
                      arr: ['1','2','3']
                  },
                  rules: {//rules的使用方式与element-ui一致，因为都依赖了async-validator
                      name: {
                          required: true,
                          message: 'aaaaaaaaaaa'
                      },
                      sex: { 
                          validator: (rule, value, callback) => {
                              if(true) {
                                  return callback();
                              }
                              callback(new Error('message'))
                          },
                          trigger: 'blur' 
                      }
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
  ```

  


