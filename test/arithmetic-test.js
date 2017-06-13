'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('Test for the arithmetic functions', () => {
  //testing the add function
  describe('test addition', () => {
    it('should return 5', () => {
      let result = arithmetic.add(2, 3);
      expect(result).toEqual(5);
    });
  });

  //testing substraction function
  describe('test substraction', () => {
    it('it should return 3', ()=> {
      let result = arithmetic.sub(6,3);
      expect(result).toEqual(3);
    });
  });
});
