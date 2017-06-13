'use strict';

const expect = require('expect');

const greet = require('../lib/greet.js');

describe('testing greet', () => {

  describe('testing greet if argument is world!', () => {
    it('should return Hello, world!', () => {
      let result = greet('world!');
      expect(result).toEqual('Hello, world!');
    });
  });

  describe('testing greet if argument is not a string', () => {
    it('should return null', () => {
      let result = greet(3);
      expect(result).toEqual(null);
    });
  });
});
