'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing add', () => {
    it('should return 3', () => {
      let result = arithmetic.add(1,2);
      expect(result).toEqual(3);
    });
    it('should return a is NaN!', () => {
      let result = arithmetic.add('1',2);
      expect(result).toEqual('a is NaN!');
    });
    it('should return b is NaN!', () => {
      let result = arithmetic.add(1,'2');
      expect(result).toEqual('b is NaN!');
    });
  });

  describe('testing sub', () => {
    it('should return 1', () => {
      let result = arithmetic.sub(3,2);
      expect(result).toEqual(1);
    });
    it('should return a is NaN!', () => {
      let result = arithmetic.sub('3',2);
      expect(result).toEqual('a is NaN!');
    });
    it('should return b is NaN!', () => {
      let result = arithmetic.sub(3,'2');
      expect(result).toEqual('b is NaN!');
    });
  });
});
