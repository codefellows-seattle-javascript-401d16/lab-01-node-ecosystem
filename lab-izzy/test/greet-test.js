'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet for hello world', () => {

  describe('testing hello', () => {
    it('should return Hello, world!', () => {
      let result = greet('world!');
      expect(result).toEqual('Hello, world!');
    });
  });

  describe('testing for null', () => {
    it('should return null for non string values', () => {
      let result = greet(5);
      expect(result).toEqual(null);
    });
  });
});
