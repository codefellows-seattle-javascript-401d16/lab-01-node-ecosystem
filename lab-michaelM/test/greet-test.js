'use-strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('Testing greet.', () => {
  // begin greet expected string test
  describe('Testing greet for value of Hello, world!', () => {
    it('Should return Hello world!', () => {
      expect(greet('world!')).toEqual('Hello, world!');
    });
  });
  // end greet expected string test
  describe('Testing greet for value of null', () => {
    it('Should return null', () => {
      expect(greet(5)).toEqual(null);
    });
  });
});
