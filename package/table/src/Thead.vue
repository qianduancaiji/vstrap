<script>
	export default {
        name: 'VsThead',
        inject: {
            table: 'table'
        },
        render() {
            return (
                <table class="table vs-table table-hover">
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