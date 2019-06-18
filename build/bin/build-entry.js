
const fs = require('fs')

let { entryTemplate, ENTRY_PATH } = require('../template/build-entry.js')


fs.open(ENTRY_PATH, 'a+', function (err, fd) {
	if (err) {
		throw err
	}
	fs.writeFile(ENTRY_PATH, entryTemplate, function (err, data) {})
})


