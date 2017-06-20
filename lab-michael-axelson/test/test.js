'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');



describe('testing whether or not', () => {
  it('should return null for a number', () => {
    let result = greet(345);
    expect(result).toEqual(null);
  });
  it('should return a console log for ONLY strings passed through...', () => {
    let result = greet('World!');
    expect(result).toEqual(console.log('Hello, World!'));
  });
});


describe('testing arithmetic', () =>{
  describe('testing adding method... ', () => {
    it('should return 4', () => {
      let result = arithmetic.add(2 , 2);
      expect(result).toEqual(4);
    });
    it('should return a number', () => {
      let result = typeof arithmetic.add(2 , 2);
      expect(result).toEqual('number');
    });
    it('should return null when anything but strings are passed into it...', () => {
      let result = arithmetic.add('suhh', 2);
      expect(result).toEqual(null);
    });
  });

  describe('testing subtracting method...', () => {
    it('should return 0', () => {
      let result = arithmetic.sub(2 , 2);
      expect(result).toEqual(0);
    });
    it('should return a number', () => {
      let result = typeof arithmetic.sub(2 , 2);
      expect(result).toEqual('number');
    });
    it('should return NaN when strings are passed into it...', () => {
      let result = arithmetic.sub('suhh', 2);
      expect(result).toEqual(null);
    });
  });
});
