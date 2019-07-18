

<script>
	export default {
        name: 'VsTbody',
        props: {
            rowData: {
                type: [Object],
                default: function() {
                    return {}
                }
            }
        },
        inject: {
            table: 'table'
        },
        computed: {
            rowKey() {
                return this.table.rowKey;
            },
            childrenField() {
                return this.table.treeProps.children;
            }
        },
        render(h) {
            let body = this.table.tree ? this.renderTreeBody() : this.renderBody();
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
                if (!classList.contains('vs-tree-table-expend-icon')) {
                    return;
                }
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
                        let hasChildren = item[_this.childrenField] && item[_this.childrenField].length !== 0;
                        item.$leaf = !hasChildren;
                        let vnode = _this.renderTreeTr(item)
                        treeVnodes.push(vnode)
                        if (hasChildren) {
                            flat(item[_this.childrenField], ++$depth)
                        }
                    })
                }([this.rowData]))
                return treeVnodes;
            },
            renderBody() {
                return this.table.data.map(item => this.renderTr(item))
            },
            renderTr(item) {
                return (
                    <tr key={ item[this.rowKey] }>
                    {
                        this.table.columns.map((column, index) => { 
                            return (
                                <td>
                                    { column.render ? column.render(h, item) : item[column['key']] }
                                </td>
                            )
                        })
                    }
                    </tr>

                )
            },
            renderTreeTr(item) {
                return (
                    <tr key={ item[this.rowKey] } 
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
