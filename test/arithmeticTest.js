'use strict';



const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('testing for arithmetic', () => {
  describe('testing for add', () => {
    it('should return 5', () => {
      let result = arithmetic.add(2,3);
      expect(result).toEqual(5);
    });
    it('should return value is a non number', () => {
      let result = arithmetic.add('aye',3);
      expect(result).toEqual(NaN);
    });
  });
  describe('testing for sub', () => {
    it('should return 1', () => {
      expect(arithmetic.sub(3,2)).toBe(1);
    });
    it('should return a is a non number', () => {
      expect(arithmetic.sub('hi',2)).toEqual(NaN);
    });
    it('should return b is a non number', () => {
      expect(arithmetic.sub(3,'hola')).toEqual(NaN);
    });
  });
});
