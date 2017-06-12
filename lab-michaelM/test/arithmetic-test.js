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
  // begin add test for non number value
  describe('Testing add for non number value.', () => {
    it('Should return message in console.', () => {
      expect(arithmetic.add('a','b')).toEqual('Please enter numeric values.');
    });
  });
  // end add test for non number value
  // begin sub test for non number value
  describe('Testing sub for non number value.', () => {
    it('Should return message in console.', () => {
      expect(arithmetic.sub('a','b')).toEqual('Please enter numeric values.');
    });
  });
  // end sub test for non number value
});
