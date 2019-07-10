
import Loading from './../../package/loading/index.js';

export default (function() {
    let els = [];
    let type = function(value) {
        if(value.constructor === Boolean) {
            return 'bool';
        }
        if (value.constructor === Object) {
            return 'object';
        }
        return null
    }
    return {
        bind: function (el, binding, vnode) {
            let isTable = el.classList.contains('vs-table-container');
            let initEl = isTable ? el.querySelector('.vs-tbody-box') : el;
            let load = null;
            let value = binding.value;
            if (type(value) === 'bool') {
                load = new Loading(initEl);
                if (!value) {
                    load.close()
                }
            } else if(type(value) === 'object') {
                /* 
                    {boxMinHeight: '', loadingText: '', background: ''}
                */
               
                load = new Loading(initEl, value);
                if (!value.visible) {
                    load.close()
                }
            }
            els.push(load);
        },
        inserted: function () {},
        update: function (el, binding, vnode) {
            
            let isTable = el.classList.contains('vs-table-container');
            let initEl = isTable ? el.querySelector('.vs-tbody-box') : el;
            let load = els.find(item => item.element === initEl);
            let value = binding.value;
            if (type(value) === 'bool') {
                if (value) {
                    load.open();
                } else {
                    load.close();
                }
            } else if(type(value) === 'object') {
                if (value.visible) {
                    load.open();
                } else {
                    load.close();
                }
            }
            
        },
        componentUpdated: function () {},
        unbind: function () {}
    }
})()