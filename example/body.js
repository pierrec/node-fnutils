var fnutils = require('..')

function test () {
	var a = 123
	return a + 456
}

console.log( fnutils.body(test) )