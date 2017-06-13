
'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {
  describe('testing add', () => {
    it('should return 8', () => {
      let result = arithmetic.add(5, 3);
      expect(result).toEqual(8);
    });
  });
});



  // describe('testing subtract', () => {
  //   it('should return 2', () => {
  //     let result = arithmetic.subtract(8, 6);
  //     expect(result).toEqual(2);
  //   });
  // });
  //
  // describe('testing for number: a'), () => {
  //   it('should send an error in the console', () => {
  //     if (isNan(a)){
  //       console.log( a + ' is not a number');
  //     };
  //   });
  // };
  //
  // describe('testing for number: b'), () => {
  //   it('should send an error in the console', () => {
  //     if (isNan(b)){
  //       console.log( b + ' is not a number');
  //     };
  //   });
  // };
