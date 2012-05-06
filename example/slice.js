var fnutils = require('..')

function test () {
	var args = fnutils.slice(arguments, 0)
	console.log('test arguments (type=%s)', typeof args, args)
}

test('a', 1, true)
