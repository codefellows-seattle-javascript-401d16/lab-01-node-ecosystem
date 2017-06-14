'use strict';

const expect = require('expect');

const arithmetic = require('/test/arithmetic.js');

describe('testing for arithmetic', () => {
  describe('testing for add', () => {
    it('should return 5', () => {
      expect(arithmetic.add(2,3)).toBe(5);
    });
    it('should return a is a non number', () => {
      expect(arithmetic.add('aye',3)).toBe(NaN);
    });
    it('should return b is a non number', () => {
      expect(arithmetic.add(2,'hello')).toBe(NaN);
    });
  });
  describe('testing for sub', () => {
    it('should return 1', () => {
      expect(arithmetic.sub(3,2)).toBe(1);
    });
    it('should return a is a non number', () => {
      expect(arithmetic.sub('hi',2)).toBe(NaN);
    });
    it('should return b is a non number', () => {
      expect(arithmetic.sub(3,'hola')).toBe(NaN);
    });
  });
});
