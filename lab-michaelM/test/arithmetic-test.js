'use-strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('Testing arithmetic.', () => {
  // begin add test
  describe('Testing add.', () => {
    it('Should return 2.', () => {
      expect(arithmetic.add(1,1)).toEqual(2);
    });
  });
  // end add test
  // begin sub test
  describe('Testing sub.', () => {
    it('Should return 2.', () => {
      expect(arithmetic.sub(3,1)).toEqual(2);
    });
  });
  // end sub test
});
