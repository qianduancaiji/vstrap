
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const render = require('../compiler/index.js');

const Directives_Path = path.resolve(__dirname, '../../src/directives');

let directivesPath =  glob.sync(Directives_Path +'/**/!(index).js').map(item => {
    let relativePath = path.relative(Directives_Path, item).split(path.sep).join('/').replace('.js', '');
    let directiveName = relativePath.replace(/\//g, '-');
    return {
        dir: relativePath,
        name: directiveName
    }
})

fs.readFile('./build/template/directive.tjs', 'utf8', (err, data) => {
    let template = render(data, {
        packages: directivesPath
    })
    fs.writeFile(path.resolve(Directives_Path, 'index.js'), template, (err, data) => {
        if (err) {
            throw err
        } else {
            
        }
    })
})

