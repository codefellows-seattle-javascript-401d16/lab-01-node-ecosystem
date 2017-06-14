'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');


describe('testing greet', function() {

  describe('test for null', function() {
    it('result should be null', function() {
      let result = greet(1234);
      expect(result).toEqual(null);
    });
  });

  describe('hello world?', function() {
    it('result should be Hello, World!', function() {
      let result = greet('World!');
      expect(result).toEqual('Hello, World!');
    });
  });
});
