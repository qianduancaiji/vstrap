
<script>
    import VsThead from './Thead.vue';
    import TableCol from './TableCol.vue';
    import VsTbody from './Tbody.vue';
	export default {
        name: 'VsTable',
        props: {
            data: {
                type: Array,
                default: function() {
                    return []
                }
            },
            columns: {
                type: Array,
                default: function() {
                    return []
                }
            },
            tree: {
                type: Boolean,
                default: false
            }
        },
        provide: function() {
            return {
                table: this
            }
        },

        components: {
            VsTbody,
            VsThead,
            TableCol
        },
        render() {
           let colgroup = (
               <table-col slot="colgroup"></table-col>
           )
            return (
                <div>
                    <vs-thead>
                        { colgroup }
                    </vs-thead>
                    
                    {
                        this.tree ?
                        this.data.map((rowData, index) => {
                            return (
                                <table class="table vs-table table-hover">
                                    { colgroup }
                                    <vs-tbody rowData={ rowData } key={ rowData.id }></vs-tbody>
                                </table>
                                
                            )
                        }) :
                        <table class="table vs-table table-hover">
                            { colgroup }
                            <vs-tbody></vs-tbody>
                        </table>
                    }
                </div>
            )
        },
        methods: {
            renderThead() {

            },
            getColumns() {
                
            }
        } 
	}
</script>
