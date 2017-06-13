'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic -- ', () => {

  const nonNumericTests = (fn) => {
    expect(fn("x", 3)).toNotExist();
    expect(fn(3, "x")).toNotExist();
    expect(fn(1)).toNotExist();
    expect(fn()).toNotExist();
    expect(fn(1, 2)).toNotExist();
  }

  describe('testing add: ', () => {

    it('should return 4', () => {
      const result = arithmetic.add(2, 2);
      expect(result).toEqual(4);
    });

    it('should return 6', () => {
      const result = arithmetic.add(8, -2);
      expect(result).toEqual(6);
    });

    it('should return null on non-numeric input', () => {

      nonNumericTests(arithmetic.add);
      // expect(arithmetic.add("hello", 3)).toNotExist();
      // expect(arithmetic.add(3, "hello")).toNotExist();
      // expect(arithmetic.add(3)).toNotExist();
      // expect(arithmetic.add()).toNotExist();
    })
  });

  describe('testing subtract: ', () => {
    it('should return 3', () => {
      const result = arithmetic.sub(5, 2);
      expect(result).toEqual(3);
    });

    it('should return -1', () => {
      expect(arithmetic.sub(0, 1)).toEqual(-1);
    });

    it('should return null on non-numeric input', () => {
      nonNumericTests(arithmetic.sub);
    });
  });

});
