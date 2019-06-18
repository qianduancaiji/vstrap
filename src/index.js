
import ButtonGroup from '../package/button-group/index.js'
import Button from '../package/button/index.js'
import CheckboxGroup from '../package/checkbox-group/index.js'
import Checkbox from '../package/checkbox/index.js'
import FormItem from '../package/form-item/index.js'
import Form from '../package/form/index.js'
import Input from '../package/input/index.js'
import Option from '../package/option/index.js'
import Select from '../package/select/index.js'
import TableColumn from '../package/table-column/index.js'
import Table from '../package/table/index.js'
import Upload from '../package/upload/index.js'

const packages = [
	ButtonGroup,
    Button,
    CheckboxGroup,
    Checkbox,
    FormItem,
    Form,
    Input,
    Option,
    Select,
    TableColumn,
    Table,
    Upload
]

const install = function (Vue) {
	packages.forEach(name => Vue.use(name))
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
    Option,
    Select,
    TableColumn,
    Table,
    Upload
}
