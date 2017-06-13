'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('greet test', () => {

  describe('testing greet with string', () => {
    it('should return Hello, World!', () => {
      let result = greet('World!');
      expect(result).toEqual('Hello, World!');
    });
  });

  describe('testing greet non string', () => {
    it('should return null', () => {
      let result = greet(45);
      expect(result).toEqual(null);
    });
  });

});
