var fnutils = require('..')

function test (a, b, c) {
	return a + b + c
}

console.log( fnutils.head(test) )