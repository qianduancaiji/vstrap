
const glob = require('glob')
const path = require('path')

const PACKAGE_Path = path.resolve(__dirname, '../../package')
const ENTRY_PATH = path.resolve(__dirname, '../../src/index.js')

let { firstToUpperCase } = require('../util.js')

let packageArr = glob.sync(PACKAGE_Path +'/**/index.js').map(packagePath => {
	return path.relative(PACKAGE_Path, packagePath).split(path.sep)[0]
})
let packageName = packageArr.map(packagePath => firstToUpperCase(packagePath))

let importTemplate = (packageName => {
	return packageName.map((name, index) => `import ${name} from '../package/${packageArr[index]}/index.js'`).join('\n')
})(packageName)

let entryTemplate = (() => (
`
import '../package/style/index.scss';
${importTemplate}

const packages = [
	${packageName.join(',\n    ')}
]

const install = function (Vue) {
	packages.forEach(name => Vue.use(name))
}

export default {
	version: '1.0.0',
	install,
	${packageName.join(',\n    ')}
}
`
))()


module.exports = {
	ENTRY_PATH,
	entryTemplate
}
