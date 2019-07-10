const fs = require('fs');
const render = require('../compiler/index.js');
const glob = require('glob');
const path = require('path');

const PACKAGE_Path = path.resolve(__dirname, '../../package');
const ENTRY_PATH = path.resolve(__dirname, '../../src/index.js');

let { firstToUpperCase } = require('../util.js')
let packageDir = glob.sync(PACKAGE_Path +'/*/index.js').map(packagePath => {
	return path.relative(PACKAGE_Path, packagePath).split(path.sep)[0]
})
let packages = packageDir.map(packagePath => {
    return {
        dir: packagePath,
        name: firstToUpperCase(packagePath)
    }
})

fs.readFile('./build/template/entry.tjs', 'utf8', (err, data) => {
    let template = render(data, {
        packages: packages
    });
    fs.writeFile(ENTRY_PATH, template, (err, data) => {
        console.log(err, data);
    })
})
