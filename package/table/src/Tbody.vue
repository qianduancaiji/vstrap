

<script>
	export default {
        name: 'VsTbody',
        props: {
            rowData: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        inject: {
            table: 'table'
        },
        data() {
            return {
                
            }
        },
        computed: {
            flatRowData() {
                let flatData = [];

                (function flat(data, depth) {
                    data.forEach((item, index) => {

                        let $depth = depth === undefined ? 0 : depth;
                        item.$depth = $depth
                        flatData.push(item)
                        if (item.children && item.children.length !== 0) {
                            flat(item.children, ++$depth)
                        } else {
                            item.$leaf = true
                        }
                    })
                }([this.rowData]))
                return flatData;
            }
        },
        render(h) {
            console.time('body')
            let body = this.renderTreeBody();
            console.timeEnd('body')
            return (
                <tbody>
                    { body }
                </tbody>
            )
        },
        methods: {
            handleIconClick(e) {
                let currEl = e.currentTarget;
                let classList = currEl.classList;
                let tr = this.getParents(currEl, 'tr');
                if (classList.contains('vs-tree-table-expended-icon')) {
                    classList.remove('vs-tree-table-expended-icon')
                    this.closeAllChildren(tr)
                } else {
                    classList.add('vs-tree-table-expended-icon')
                    this.expendedChildren(tr);
                }
            },
            getParents(el, target) {
                let parentNode = el.parentNode;
                if (parentNode.tagName.toLowerCase() === target) {
                    return parentNode;
                } else {
                    return this.getParents(parentNode, target)
                }         
            },
            expendedChildren(el) {
                let level = el.dataset.level;
                this.getNextChildren(el).forEach(el => {
                    el.classList.remove('vs-hidden')
                    if (el.querySelector('.vs-tree-table-icon').classList.contains('vs-tree-table-expended-icon')) {
                        this.expendedChildren(el)
                    }
                })
            },
            getNextChildren(el, mode = false) {
                let result = [];
                let level = el.dataset.level * 1 + 1;
                let next = el.nextSibling;
                if (mode) {
                    while(next.dataset.level >= level ) {
                        result.push(next)
                        next = next.nextSibling;
                        if (!next) {
                            break;
                        }
                        
                    }
                } else {
                    while(next.dataset.level >= level ) {
                        
                        if (!mode && next.dataset.level == level) {
                            result.push(next)
                        }
                        next = next.nextSibling;
                        if (!next) {
                            break;
                        }
                        
                    }
                }
                return result;
            },
            closeAllChildren(el) {
                let level = el.dataset.level;
                this.getNextChildren(el, true).forEach(el => {
                    el.classList.add('vs-hidden')
                })
            },
            renderTreeBody() {
                let treeVnodes = [];
                let _this = this;
                (function flat(data, depth) {
                    data.forEach((item, index) => {
                        let $depth = depth === undefined ? 0 : depth;
                        item.$depth = $depth;
                        let hasChildren = item.children && item.children.length !== 0;
                        item.$leaf = !hasChildren;
                        let vnode = _this.renderTr(item)
                        treeVnodes.push(vnode)
                        if (hasChildren) {
                            flat(item.children, ++$depth)
                        }
                    })
                }([this.rowData]))
                return treeVnodes;
            },
            renderTr(item) {
                return (
                    <tr key={ item.id } 
                        data-level={ item.$depth }
                        class={ { 'vs-hidden': !item.$depth == 0 } }>
                    {
                        this.table.columns.map((column, index) => { 
                            return (
                                <td 
                                    style={ 
                                        { 
                                            'padding-left': index === 0 ? (item.$depth * 30 + 'px') : false 
                                        } 
                                    }>
                                    {
                                        index === 0 &&
                                        <span class={ 
                                            { 
                                                'vs-tree-table-icon': true,
                                                'vs-tree-table-expend-icon': !item.$leaf,
                                            } 
                                            }
                                            onClick={ this.handleIconClick }>
                                        </span>
                                    }
                                    { column.render ? column.render(h, item) : item[column['key']] }
                                </td>
                            )
                        })
                    }
                    </tr>

                )
            }
        }
	}
</script>
