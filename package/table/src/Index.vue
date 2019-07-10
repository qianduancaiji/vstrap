
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
            },
            rowKey: {
                type: String,
                default: 'id'
            },
            treeProps: {
                type: Object,
                default: function() {
                    return {
                        children: 'children'
                    }
                }
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
            let rowKey = this.rowKey;
            let colgroup = (
               <table-col slot="colgroup"></table-col>
            );
            let body = null;
            if (this.data.length === 0) {
                body = (
                    <div class="vs-tbody-box">
                        {
                            <table class="table vs-table table-hover">
                                <tr><td class="vs-align" col={ this.columns.length }>无数据</td></tr>
                            </table>
                        }
                    </div>
                )
            } else {
                body = (
                    <div class="vs-tbody-box">
                        {
                            this.tree ?
                            this.data.map((rowData, index) => {
                                return (
                                    <table class="table vs-table table-hover">
                                        { colgroup }
                                        <vs-tbody rowData={ rowData } key={ rowData[rowKey] }></vs-tbody>
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
            }
            
            return (
                <div class="vs-table-container">
                    <vs-thead>
                        { colgroup }
                    </vs-thead>
                    {
                        body
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
