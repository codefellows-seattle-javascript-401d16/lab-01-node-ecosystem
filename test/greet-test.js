'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet function for valid strings', () =>{

  //testing for valid strings
  describe('testing for valid string', () => {
    it('should return Hello, World!', () => {
      let result = greet('World!');
      expect(result).toEqual('Hello, World!');
    });
  });
  //testing for invalid string input
  describe('testing for invalid input', () => {
    it('should return null', () =>{
      let result = greet(2);
      expect(result).toEqual(null);
    });
  });
});
