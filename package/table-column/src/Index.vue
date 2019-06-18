

<script>
	export default {
        name: 'VsTableColumn',
        props: {
            prop: {
                type: String
            },
            label: {
                type: String
            },
            width: {
                type: String
            }
        },
        render(h) {
            return (
                <td>
                { 
                    this.$scopedSlots.default({row: 111})
                }
                </td>
                
            )
        }
	}
</script>
