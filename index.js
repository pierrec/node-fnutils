/**
 * Convert an arguments object into an array
 * @param {Object} arguments to be converted
 * @param {number} index to start at
 * @return {Array} arguments in Array format starting at index
 * @private
 */
exports.slice = function (args, index) {
  if (args.length === 0) return []

  for (
    var i = index, n = args.length, a = new Array(n - index)
  ; i < n
  ; i++
  )
    a[i - index] = args[i]
  return a
}