'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic', () => {
  describe('add', () => {
    it('should return 7', () => {
      let result = arithmetic.add(3, 4);
      expect(result).toEqual(7);
    });
    it('should return null', () => {
      let result = arithmetic.add('asd', 4);
      expect(result).toEqual(null);
    });
  });

  describe('sub', () => {
    it('should return -1', () => {
      let result = arithmetic.sub(3, 4);
      expect(result).toEqual(-1);
    });
    it('should return null', () => {
      let result = arithmetic.sub('asd', 4);
      expect(result).toEqual(null);
    });
  });
});
