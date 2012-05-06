;(function () {

	var fnutils = {}
  var root = this

  if (typeof module !== 'undefined' && module.exports)
    module.exports = fnutils
  else
    root.fnutils = fnutils

	/**
	 * Convert an arguments object into an array
	 *
	 * @param {Object} arguments to be converted
	 * @param {number} index to start at
	 * @return {Array} arguments in Array format starting at index
	 * @public
	 */
	fnutils.slice = function (args, index) {
	  if (args.length === 0) return []

	  for (
	    var i = index, n = args.length, a = new Array(n - index)
	  ; i < n
	  ; i++
	  )
	    a[i - index] = args[i]

	  return a
	}

	/**
	 * Convert a function into its source, stripping arguments definition
	 *
	 * @param {function} function to be converted
	 * @return {string} function source
	 * @public
	 */
	fnutils.body = function (data) {
	  if (typeof data !== 'function')
	  	throw new Error ('Invalid input: not a function')

		var s = data.toString()

	  return s.substring( s.indexOf('{') + 1, s.lastIndexOf('}') )
	}

	/**
	 * Give a function arguments
	 *
	 * @param {function} function to inspect
	 * @return {array} function arguments
	 * @public
	 */
	fnutils.head = function (data) {
	  if (typeof data !== 'function')
	  	throw new Error ('Invalid input: not a function')

	  var s = data.toString()

	  s = s.substring( s.indexOf('(') + 1, s.indexOf(')') ).trim()
	  
	  return s.length > 0
	  	? s.split(',').map(function (arg) { return arg.trim() })
	  	: []
	}
	
}())