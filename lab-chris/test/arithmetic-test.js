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
});
