/*
 * Function utils `slice()` tests
 */
var assert = require('assert')
var isArray = require('util').isArray

var fnutils = require('..')

describe('#slice', function () {
  describe('with empty arguments', function () {
    it('should return an empty array', function (done) {
      function test () {
        var args = fnutils.slice(arguments, 0)

        assert.equal(isArray(args), true)
        assert.equal(args.length, 0)
      }

      test()

      done()
    })
  })

  describe('with index 0', function () {
    it('should return the array of arguments', function (done) {
      function test (a, b, c) {
        var args = fnutils.slice(arguments, 0)

        assert.equal(isArray(args), true)
        assert.equal(args.length, 3)
        assert.deepEqual(args, [a, b, c])
      }

      test(1, true, 'abc')

      done()
    })
  })

  describe('with index 1', function () {
    it('should return the array of arguments except the first one', function (done) {
      function test (a, b, c) {
        var args = fnutils.slice(arguments, 1)

        assert.equal(isArray(args), true)
        assert.equal(args.length, 2)
        assert.deepEqual(args, [b, c])
      }

      test(1, true, 'abc')
      
      done()
    })
  })
})