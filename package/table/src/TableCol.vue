<script>
	export default {
        name: 'VsTableCol',
        inject: {
            table: 'table'
        },
        render() {
            return (
                <colgroup>
                    {
                        this.table.columns.map(column => {
                            return (
                                <col width={ column.width }/>
                            )
                        })
                    }
                </colgroup>
            )
        }
    }
</script>