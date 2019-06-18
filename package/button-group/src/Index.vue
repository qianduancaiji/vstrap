
<script>
	export default {
		name: 'VsButtonGroup',
		render: function (h) {
			return h(
				'div',
				{
					class: ['btn-group']
				},
				this.$slots.default
			)
		}	
	}
</script>
