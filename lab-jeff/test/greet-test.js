'use strict';

const expect = require('expect');

const greet = require('../lib/greet.js');

describe('testing greet', () => {

  describe('testing greet', () => {
    it('should return Hello, world!', () => {
      let nameResult = greet('world!');
      expect(nameResult).toEqual('Hello, world!');
    });
  });
  describe('testing greet', () => {
    it('should return null', () => {
      let nameResult = greet(7);
      expect(nameResult).toEqual(null);
    });
  });
});
