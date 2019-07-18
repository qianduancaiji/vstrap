
import '../package/style/index.scss';

import directives from '../src/directives/index.js';

import ButtonGroup from '../package/button-group/index.js';

import Button from '../package/button/index.js';

import CheckboxGroup from '../package/checkbox-group/index.js';

import Checkbox from '../package/checkbox/index.js';

import FormItem from '../package/form-item/index.js';

import Form from '../package/form/index.js';

import Input from '../package/input/index.js';

import Loading from '../package/loading/index.js';

import Option from '../package/option/index.js';

import RadioGroup from '../package/radio-group/index.js';

import Radio from '../package/radio/index.js';

import Select from '../package/select/index.js';

import TableColumn from '../package/table-column/index.js';

import Table from '../package/table/index.js';

import Upload from '../package/upload/index.js';


const packages = [
    
	ButtonGroup,
    
	Button,
    
	CheckboxGroup,
    
	Checkbox,
    
	FormItem,
    
	Form,
    
	Input,
    
	Loading,
    
	Option,
    
	RadioGroup,
    
	Radio,
    
	Select,
    
	TableColumn,
    
	Table,
    
	Upload,

]

const install = function (Vue) {
    packages.forEach(name => Vue.use(name));
    directives.forEach(item => Vue.use(item));
}

export default {
	version: '1.0.0',
	install,

	ButtonGroup,

	Button,

	CheckboxGroup,

	Checkbox,

	FormItem,

	Form,

	Input,

	Loading,

	Option,

	RadioGroup,

	Radio,

	Select,

	TableColumn,

	Table,

	Upload,

}