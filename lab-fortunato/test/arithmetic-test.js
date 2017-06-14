'use strict';
const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');
describe('arithmetic', () => {
  describe('add', () => {
    it('should return 6', () => {
      let result = arithmetic.add(2, 4);
      expect(result).toEqual(6);
    });
    it('should return null', () => {
      let result = arithmetic.add('aaa', 4);
      expect(result).toEqual(null);
    });
  });
  describe('sub', () => {
    it('should return -2', () => {
      let result = arithmetic.sub(2, 4);
      expect(result).toEqual(-2);
    });
    it('should return null', () => {
      let result = arithmetic.sub('aaa', 4);
      expect(result).toEqual(null);
    });
  });
});
