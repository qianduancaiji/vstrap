<script>
	export default {
        name: 'VsThead',
        inject: {
            table: 'table'
        },
        render() {
            let className = {
                table: true,
                'vs-table': true,
                'table-hover': true,
                'table-bordered': this.table.border
            }
            return (
                <table class={ className }>
                    <thead>
                        {
                            this.table.columns.map(column => {
                                return (
                                    <th>{ column.title }</th>
                                )
                            })
                        }
                    </thead>
                    {
                        this.$slots.colgroup
                    }
                </table>
            )
        }
    }
</script>