'use strict';

const expect = require('expect');
const greet = require('../libs/greet.js');

describe('testing greet', () => {

  describe('testing with valid string greet(world!)', () => {
    it('should return \'Hello, world!\'', () => {
      let result = greet('world!');
      expect(result).toEqual('Hello, world!');
    });
  });

  describe('testing with non sting value greet(10)', () => {
    it('should return null', () => {
      let result = greet(10);
      expect(result).toEqual(null);
    });
  });
});