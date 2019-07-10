
import loading from './loading.js';


const directives = [

    loading,

]



loading.install = function(Vue) {
    Vue.directive('vs-loading', loading);
}


export default directives;
