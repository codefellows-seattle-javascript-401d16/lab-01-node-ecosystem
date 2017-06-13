
const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('Checking numbers', () => {
  describe('#add method', () => {
    it('Should return 5', () => {
      let result = arithmetic.add(3, 2);
      expect(result).toEqual(5);
    });
    it('Should return That is not a number!', () => {
      expect('That is not a number!');
    });
  });
  describe('Checking subtract', () => {
    it('Should return 1', () => {
      let result = arithmetic.sub(3, 2);
      expect(result).toEqual(1);
    });
    it('Should return That is not a number!', () => {
      expect('That is not a number!');
    });
  });
});
