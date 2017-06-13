'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing addition', () => {
    it('should return 4', () => {
      let result = arithmetic.add(2,2);
      expect(result).toEqual(4);
    });
  });

  describe('testing addition', () => {
    it('should return null', () => {
      let result = arithmetic.add('huh',2);
      expect(result).toEqual(null);
    });
  });
  describe ('testing subtraction', () => {
    it('should return 3', () => {
      let result = arithmetic.sub(6,3);
      expect(result).toEqual(3);
    });
  });
  describe ('testing subtraction', () => {
    it('should return null', () => {
      let result = arithmetic.sub('huh',3);
      expect(result).toEqual(null);
    });
  });
});
