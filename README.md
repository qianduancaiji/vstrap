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
  
  <vs-table :data="list" 
        :columns="columns1" 
        :tree="true"
        row-key="id"
        :tree-props="{children: 'children1'}" 
        v-vs-loading="loading" //表格加载图标，接收一个boolean或者配置对象
        @click="addColumns">
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
  ```
    

  ```


  