'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing addition', () => {
    it('should return 4', () => {
      let result = arithmetic.addition(2, 2);
      expect(result).toEqual(4);
    });
  });

  describe('testing null in addition', () => {
    it('should return null', () => {
      let result = arithmetic.addition('hello', 2);
      expect(result).toEqual(null);
    });
  });

  describe('testing subtraction', () => {
    it('should return 3', () => {
      let result = arithmetic.subtraction(6,3);
      expect(result).toEqual(3);
    });
  });

  describe('testing null in subtraction', () => {
    it('should return null', () => {
      let result = arithmetic.subtraction('wow',3);
      expect(result).toEqual(null);
    });
  });
});
