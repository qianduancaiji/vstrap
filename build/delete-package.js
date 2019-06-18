const fs = require('fs')
const path = require('path')
let package = process.argv.slice(2)

package.forEach(name => {
	
	let packagePath = path.resolve(__dirname, '../', `./package/${name}`)
	if (!fs.existsSync(packagePath)) {
		
	}
})