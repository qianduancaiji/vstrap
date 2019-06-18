
<script>
	const listGroupClass = {
		class: [
			'list-group-item',
			'd-flex',
			'justify-content-between',
			'align-items-center',
			'list-group-item-action'
		]
	}
	export default {
		name: 'VsUpload',
		props: {
			name: {
				type: String
			},
			autoReplace: {
				type: Boolean,
				default: true
			},
			limit: {
				type: [String, Number],
				default: 1
			},
			listType: {
				type: String,
				default: 'text',
				validator: function(value) {
					return ['text', 'picture'].includes(value)
				}
			},
			listWidth: {
				type: String,
				default: '25%'
			}
		},
		data() {
			return {
				files: {},
				filesList: [],
				filesListView: []
			}
		},
		render: function (h) {
			return (
				<div>
					<div class="vs-inline" onClick={ this.triggerClick }>
						{this.$slots.default}
						<input 
							onInput={ this.handleInput } 
							type="file" 
							name={ this.name } 
							class="vs-hidden"
							multiple>
						</input>
					</div>
					{ this.$slots.tip }
					{
						this.listType === 'text' ? 
						<ul class="list-group">
							{
								this.filesListView.map(file => {
									return (
										<li { ...listGroupClass }>
											{ file.name }
											<span class="badge badge-primary badge-pill vs-badge">删除</span>
										</li>
									)
								})
							}
						</ul> :
						<div class="card-group">
							{
								this.filesListView.map(file => {
									return (
										<div class="card vs-card-width vs-card-height">
											<img class="card-img-top" src={ file.url } alt=""/>
											<div class="card-body">
											<h5 class="card-title">{ file.name }</h5>
											<p class="card-text">{ new Date() }</p>
											<p class="card-text"><small class="text-muted">{ new Date() }</small></p>
											</div>
										</div>
									)
								})
							}
						</div>
					}
			
				</div>
			)
		},
		methods: {
			triggerClick(e) {
				let children = e.currentTarget.children
				children[children.length - 1].click()	
			},
			handleInput(e) {
				console.log(this.autoReplace)
				if (this.autoReplace) {
					this.files = e.target.files
					this.filesListView = Array.from(this.files).map(file => {
						return {
							name: file.name,
							url: URL.createObjectURL(file)
						}
					})
					
				} else {

				}
			}
		}
	}
</script>
