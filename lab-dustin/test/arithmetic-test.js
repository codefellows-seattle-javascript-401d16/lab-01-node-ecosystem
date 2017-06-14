'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('testing arithmetic', function() {

  describe('addition', function() {
    it('result should be 9', function() {
      let result = arithmetic.add(6, 3);
      expect(result).toEqual(9);
    });
  });

  describe('subtraction', function() {
    it('should return 8', function() {
      let result = arithmetic.sub(12,4);
      expect(result).toEqual(8);
    });
  });
});
