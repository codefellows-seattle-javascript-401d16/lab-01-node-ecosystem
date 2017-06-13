'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe ('arithmetic functions', function (){
  describe ('add method', function() {
    it ('should return 4', function() {
      let addTest = arithmetic.add(2, 2);
      expect(addTest).toEqual(4);
    });
    it ('should return null', function(){
      let addTest = arithmetic.add('test');
      expect(addTest).toEqual(null);
    });
  });
  describe ('subtract method', function(){
    it ('should return 1', function(){
      let subtractTest = arithmetic.subtract(5, 4);
      expect(subtractTest).toEqual(1);
    });
    it ('should return null', function(){
      let subtractTest = arithmetic.subtract('test');
      expect(subtractTest).toEqual(null);
    });
  });
});
