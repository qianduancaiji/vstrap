const fs = require('fs')
const path = require('path')
let { firstToUpperCase } = require('./util.js')
let package = process.argv.slice(2)
let { indexTemplate, indexVue } = require('./template/package.js')

package.forEach(name => {
	
	let packagePath = path.resolve(__dirname, '../', `./package/${name}`)
	if (!fs.existsSync(packagePath)) {
		let firstUpperCase = firstToUpperCase(name)

		fs.mkdirSync(packagePath)
		fs.mkdirSync(packagePath + '/src')
		
		fs.open(`${packagePath}/index.js`, 'a+', function (err, fd) {
			if (err) {
				throw err
			}
			fs.writeFile(`${packagePath}/index.js`, indexTemplate(firstUpperCase), (err, data) => {
				console.log(data)
			})
		})
		fs.open(`${packagePath}/src/Index.vue`, 'a+', function (err, fd) {
			if (err) {
				throw err
			}
			fs.writeFile(`${packagePath}/src/Index.vue`, indexVue(firstUpperCase), (err, data) => {})
		})
	}
})