'use strict';

var expect = require('expect');
var arithmetic = require('../lib/arithmetic.js');

describe('Testing for arithmetic module', () => {
  describe('#add method', () => {
    it('should equal 4', () => {
      let result = arithmetic.add(1, 3);
      expect(result).toEqual(4);
    });
    it('should provide a message to enter an integer', () => {
      let result = arithmetic.add('NaN',7);
      expect(result).toEqual('Please enter a valid integer.');
    });
  });
  describe('#sub method', () => {
    it('should equal 8', () => {
      let result = arithmetic.sub(11, 3);
      expect(result).toEqual(8);
    });
    it('should provide a message to enter an integer', () => {
      let result = arithmetic.sub('NaN', 9);
      expect(result).toEqual('Please enter a valid integer.');
    });
  });
});
