/*
 * Function utils `head()` tests
 */
var assert = require('assert')
var isArray = require('util').isArray

var fnutils = require('..')

describe('#head', function () {
  describe('with a function with no argument', function () {
    it('should return an empty array', function (done) {
      function test () {}

      assert.deepEqual( fnutils.head(test), [] )

      done()
    })
  })

  describe('with a function with arguments', function () {
    it('should return an array with the arguments', function (done) {
      function test (a, b, c) {}

      assert.deepEqual( fnutils.head(test), ['a','b','c'] )

      done()
    })
  })
})