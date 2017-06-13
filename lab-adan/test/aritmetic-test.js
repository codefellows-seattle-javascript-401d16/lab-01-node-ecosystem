'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic', () => {
  describe('test add', () => {
    it('should return 10', () => {
      let result = arithmetic.add(2, 8);
      expect(result).toEqual(10);
    });
    it('should return null', () => {
      let result = arithmetic.add(' ', 4);
      expect(result).toEqual(null);
    });
  });

  describe('testing sub', () => {
    it('should return 3', () => {
      let result = arithmetic.sub(7, 4);
      expect(result).toEqual(3);
    });
    it('should return null', () => {
      let result = arithmetic.sub(' ', 4);
      expect(result).toEqual(null);
    });
  });
});
