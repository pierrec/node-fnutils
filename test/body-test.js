/*
 * Function utils `body()` tests
 */
var assert = require('assert')
var isArray = require('util').isArray

var fnutils = require('..')

describe('#body', function () {
  describe('with an empty function', function () {
    it('should return an empty string', function (done) {
      function test () {}

      assert.equal( fnutils.body(test), '' )

      done()
    })
  })

  describe('with a function', function () {
    it('should return the function body', function (done) {
      function test () {var a = {}}

      assert.equal( fnutils.body(test), 'var a = {}' )

      done()
    })
  })
})