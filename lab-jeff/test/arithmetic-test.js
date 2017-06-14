'use strict';

const expect = require('expect');

const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing add', () => {
    it('should return 7', () => {
      let addResult = arithmetic.add(4, 3);
      expect(addResult).toEqual(7);
    });
  });

  describe('testing subtract', () => {
    it('should return 3', () => {
      let subtractResult = arithmetic.subtract(7, 4);
      expect(subtractResult).toEqual(3);
    });
  });

  describe('testing add', () => {
    it('should return The entry is not a number.', () => {
      let addResult = arithmetic.add(true, 'd');
      expect(addResult).toEqual('The entry is not a number.');
    });
  });
  describe('testing subtract', () => {
    it('should return The entry is not a number.', () => {
      let subtractResult = arithmetic.subtract('j', false);
      expect(subtractResult).toEqual('The entry is not a number.');
    });
  });
});
