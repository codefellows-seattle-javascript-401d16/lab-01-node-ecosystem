'use strict';

const expect = require('expect');
const arithmetic = require('../libs/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing add arithmetic(1,1)', () => {
    it('shoud return 2', () => {
      let result = arithmetic.add(1, 1);
      expect(result).toEqual(2);
    });
  });

  describe('testing add arithmetic(\'one\',1) with string values', () => {
    it('shoud return null', () => {
      let result = arithmetic.add('one', 1);
      expect(result).toEqual(null);
    });
  });

  describe('testing sub arithmetic(2,1)', () => {
    it('should return 1', () => {
      let result = arithmetic.sub(2, 1);
      expect(result).toEqual(1);
    });
  });

  describe('testing sub arithmetic(\'two\',1) with string values', () => {
    it('shoud return null', () => {
      let result = arithmetic.add('two', 1);
      expect(result).toEqual(null);
    });
  });
});