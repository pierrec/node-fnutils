# fnUtils - Collection of utils for Function manipulation

## Overview

Collection of function processing utilities:

* `slice(arguments, index)` (_arguments Object_, _number_): returns an array of the `arguments` items starting at `index`
* `head(function)` (_Array_): returns an array of the function named arguments
* `body(function)` (_string_): returns the function source code


## Download

fnUtils is published on node package manager (npm). To install, do:

    npm install fnutils


## Usage

``` javascript
var fnutils = require('fnutils')

function test (a, b, c) {
	var args = fnutils.slice(arguments, b)

	console.log('test arguments (type=%s, length=%d)', typeof args, args.length, args)
}

test('a', 0, true)
test('a', 1, true)

console.log('HEAD', fnutils.head(test))
console.log('BODY', fnutils.body(test))
```

__Output__

    test arguments (type=object, length=3) [ 'a', 0, true ]
    test arguments (type=object, length=2) [ 1, true ]
    HEAD [ 'a', 'b', 'c' ]
    BODY 
    	var args = fnutils.slice(arguments, b)

    	console.log('test arguments (type=%s, length=%d)', typeof args, args.length, args)
