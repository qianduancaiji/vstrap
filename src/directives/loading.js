
import Loading from './../../package/loading/index.js';

export default (function() {
    let els = [];
    let getValue = function(value) {
        if(value.constructor === Boolean) {
            return {
                visible: value
            }
        }
        if (value.constructor === Object) {
            return value;
        }
        return null
    }
    return {
        bind: function (el, binding, vnode) {
            let isTable = el.classList.contains('vs-table-container');
            let initEl = isTable ? el.querySelector('.vs-tbody-box') : el;
            let load = null;
            let value = getValue(binding.value);

            /* 
                {boxMinHeight: '', loadingText: '', background: ''}
            */
            if (value !== null) {
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
            let value = getValue(binding.value);
            if (value !== null) {
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