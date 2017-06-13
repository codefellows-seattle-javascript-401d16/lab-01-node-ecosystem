'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic -- ', () => {

  const nonNumericTests = (fn) => {
    expect(fn('x', 3)).toNotExist();
    expect(fn(3, 'x')).toNotExist();
    expect(fn(1)).toNotExist();
    expect(fn()).toNotExist();
  };

  describe('testing add: ', () => {

    it('should return 2 + 2 = 4', () => {
      const result = arithmetic.add(2, 2);
      expect(result).toEqual(4);
    });

    it('should return 8 + -2 = 6', () => {
      const result = arithmetic.add(8, -2);
      expect(result).toEqual(6);
    });

    it('should return null on non-numeric input', () => {

      nonNumericTests(arithmetic.add);
    });
  });

  describe('testing subtract: ', () => {
    it('should return 5 - 2 = 3', () => {
      const result = arithmetic.sub(5, 2);
      expect(result).toEqual(3);
    });

    it('should return 0 - 1 = -1', () => {
      expect(arithmetic.sub(0, 1)).toEqual(-1);
    });

    it('should return null on non-numeric input', () => {
      nonNumericTests(arithmetic.sub);
    });
  });

});
