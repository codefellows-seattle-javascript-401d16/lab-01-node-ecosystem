'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('Checking greeting', () => {
  describe('Check input', () => {
    it('Should return Hello world', () => {
      let result = greet('world');
      expect('Hello ' + result);
    });
  });
  describe('Checking invalid input', () => {
    it('Should return null', () => {
      let result = greet(5);
      expect(result).toEqual('null');
    });
  });
});
