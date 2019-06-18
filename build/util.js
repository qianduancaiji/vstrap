let firstToUpperCase = function (str) {
	if ((typeof str).toLowerCase() === 'string') {
		let index = str.indexOf('-')
		if (index !== -1) {
			return str.toLowerCase().replace(str[0], str[0].toUpperCase()).replace(`-${str[index + 1]}`, str[index + 1].toUpperCase())
		} else {
			return str.toLowerCase().replace(str[0], str[0].toUpperCase())
		}
	}
}
module.exports = {
	firstToUpperCase
}
