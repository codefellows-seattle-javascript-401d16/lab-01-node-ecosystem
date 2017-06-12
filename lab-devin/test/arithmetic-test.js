'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('arthmetic test', () => {

  describe('testing add', () => {
    it('should return 2', () => {
      let result = arithmetic.add(1,1);
      expect(result).toEqual(2);
    });
  });

  describe('testing subtract', () => {
    it('should return 1', () => {
      let result = arithmetic.subtract(2,1);
      expect(result).toEqual(1);
    });
  });

});
