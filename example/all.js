var fnutils = require('..')

function test (a, b, c) {
	var args = fnutils.slice(arguments, b)

	console.log('test arguments (type=%s, length=%d)', typeof args, args.length, args)
}

test('a', 0, true)
test('a', 1, true)

console.log('HEAD', fnutils.head(test))
console.log('BODY', fnutils.body(test))
