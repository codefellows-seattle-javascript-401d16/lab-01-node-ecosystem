'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing add', () => {
    it('should return 4', () => {
      let result = arithmetic.add(3, 1);
      expect(result).toEqual(4);
    });
  });

  describe('testing subtract', () => {
    it('should return 2', () => {
      let result = arithmetic.sub(9,7);
      expect(result).toEqual(2);
    });
  });
  describe('testing add', () => {
    it('should return Those are not numbers', () => {
      let result = arithmetic.add('a','z');
      expect(result).toEqual('Those are not numbers');
    });
  });
  describe('testing subtract', () => {
    it('should return Those are not numbers', () => {
      let result = arithmetic.sub('a','z');
      expect(result).toEqual('Those are not numbers');
    });
  });
});
