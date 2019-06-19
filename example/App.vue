<template>
	<div>
		<!-- primary, secondary, success, danger, warning, info, light, dark, link -->
		 <!-- plain -->
		 <!-- size: lg / sm -->
		 <!-- block -->
		<vs-button-group>
            <vs-button :loading="true">默认按钮</vs-button>
			<vs-button @click="aaa" :loading="true" plain>默认按钮</vs-button>
			<vs-button type="secondary" plain>secondary</vs-button>
			<vs-button type="success" plain>success</vs-button>
			<vs-button type="danger" plain>danger</vs-button>
			<vs-button type="warning" plain>warning</vs-button>
			<vs-button type="info" plain>info</vs-button>
			<vs-button type="light" plain>light</vs-button>
			<vs-button type="dark" plain>dark</vs-button>
			<vs-button type="link" plain>link</vs-button>
		</vs-button-group>	
		<!-- <vs-input type="textarea" :rows="6" v-model="select" placeholder="sssssssssssssssssss"></vs-input>
		<vs-input type="password" v-model="test" placeholder="sssssssssssssssssss"></vs-input>
		<vs-input placeholder="sssssssssssssssssss" v-model="test"></vs-input>
		<vs-select v-model="select">
			<vs-option label="1">1</vs-option>
			<vs-option>2</vs-option>
			<vs-option label="3">34</vs-option>
			<vs-option label="5">5</vs-option>
		</vs-select>
		<hr> 
			<vs-select v-model="arr" multiple>
				<vs-option label="1">aaaa</vs-option>
				<vs-option label="2">bbbb</vs-option>
				<vs-option label="3">cccc</vs-option>
				<vs-option label="4">dddd</vs-option>
			</vs-select>
		<hr> -->
		
<!-- 		<vs-checkbox-group>
			<vs-checkbox>aaaaaaaaaaaa</vs-checkbox>
			<vs-checkbox>111111111</vs-checkbox>
		</vs-checkbox-group> -->
		<!-- <vs-form label-position="top">
			<vs-form-item label="aaaadfsafdsafdsa">
				<vs-input placeholder="sssssssssssssssssss"></vs-input>
			</vs-form-item>
		</vs-form> -->
		<!-- <vs-form ratio="2/6" label-position="top">
			<vs-form-item v-model="bb" label="名称" name="user" placeholder="afdsfdsa"></vs-form-item>
			<vs-form-item type="select" v-model="bb" label="名称" name="user" placeholder="afdsfdsa">
				<option value="saf">aaaaaa</option>
				<option value="fda">aaaaaa</option>
				<option value="fdsa">aaaaaa</option>
				<option value="fda">aaaaaa</option>
				<option value="fas">aaaaaa</option>
			</vs-form-item>
			<vs-form-item type="textarea" label="文本域" name="user" v-model="bb" placeholder="文本域"></vs-form-item>
			<vs-checkbox-group v-model="arr">
				<vs-checkbox v-model="b" value="1">aaaa</vs-checkbox>
				<vs-checkbox v-model="b" value="2">aaaa</vs-checkbox>
			</vs-checkbox-group>
			<vs-checkbox v-model="b" value="3">aaaa</vs-checkbox>
		</vs-form>
		
		<div class="form-check-inline">
			<div class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="customCheck1">
				<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
			</div>

			<div class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="customCheck1">
				<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
			</div>
		</div>
		<div class="form-check">
			<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
			<label class="form-check-label" for="exampleRadios1">
				Default radio
			</label>
		</div>
		<div class="form-check">
			<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
			<label class="form-check-label" for="exampleRadios2">
				Second default radio
			</label>
		</div>
		<div class="form-check disabled">
			<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
			<label class="form-check-label" for="exampleRadios3">
				Disabled radio
			</label>
		</div>-->
		
		<!-- <vs-upload name="" multiple list-type="picture" list-width="25%">
			<vs-button>上传文件</vs-button>
			<small slot="tip" class="form-text text-muted">We'll never share your email with anyone else.</small>
		</vs-upload> -->
        <form action="http://39.97.160.78:8080/api/login" method="post">
            <input type="text" class="form-control" name="name">
            <input type="text" class="form-control" name="password">
            <button type="submit">提交</button>
        </form>

        <i class="iconfont icon-icon-test61"></i>
        <i class="iconfont icon-icon-test60"></i>
        <vs-table :data="list" :columns="columns1" :tree="false"></vs-table>
	</div>
</template>
<script> 
	export default {
		data() {
			return {
				// test: '',
				// bb: '',
				// b: true,
				// arr: ['1','2','3'],
                // select: '1',
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
                    
                ]
			}
        },
        created() {
            this.getTree()
        },
		methods: {
			aaa() {
				console.log(111111)
			},
			input(e) {
				console.log(e)
            },
            handlClick(data) {
                console.log(data);
            },
            getTree() {
                this.axios.get(`http://39.97.160.78:8080/api/hierarchies/0/groups/1/categories`, {
                    params: {
                        style: 0
                    },
                    withCredentials: true
                }).then((result) => {
                    console.log(result);
                    this.list = result.data.data
                }).catch((err) => {
                    
                });
            }
		}
	}
</script>