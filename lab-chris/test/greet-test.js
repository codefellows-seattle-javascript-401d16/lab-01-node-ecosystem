'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet', () => {

  describe('testing greet', () => {
    it('should return hello, world!', () => {
      let result = greet('world!');
      expect(result).toEqual('hello, world!');
    });
  });
  describe('testing greet', () => {
    it('should return null', () => {
      let result = greet(7);
      expect(result).toEqual(null);
    });
  });
});
