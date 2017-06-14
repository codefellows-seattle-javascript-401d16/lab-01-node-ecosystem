'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing the arithmetic module', () => {
  describe('testing addition', () => {
    it('should return 10', () => {
      let sum = arithmetic.add(4, 6);
      expect(sum).toEqual(10);
    });
    it('should return true', () => {
      expect(typeof(arithmetic.add(1, 1))).toEqual('number');
    });
  });
  describe('testing subtraction', () => {
    it('should return 5', () => {
      let result = arithmetic.sub(11, 6);
      expect(result).toEqual(5);
    });
    it('should return false', () => {
      expect(isNaN(arithmetic.sub(1, 1))).toEqual(false);
    });
  });
});
