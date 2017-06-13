'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe ('testing arithmetic', () => {
  describe ('testing add', () => {
    it ('should return 4', () => {
      let result = arithmetic.add(2, 2);
      expect(result).toEqual(4);
    });
    it ('should return a string', () => {
      let result = arithmetic.add('hello', 2);
      expect(result).toEqual('Please use a number');
    });
  });
  describe ('testing subtract', () => {
    it ('should return 2', () => {
      let result = arithmetic.subtract(4, 2);
      expect(result).toEqual(2);
    });
    it ('should return a string', () => {
      let result = arithmetic.subtract('hello', 2);
      expect(result).toEqual('Please use a number');
    });
  });
});
