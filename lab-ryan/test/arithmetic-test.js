'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe ('testing arithmetic', () => {
  describe('testing addition', ()=>{
    it('should return 4', ()=>{
      let result = arithmetic.add(2,2);
      expect(result).toEqual(4);
    });
  });
  describe('testing add', ()=>{
    it('should return null', ()=>{
      let result = arithmetic.add('lulwat', 2);
      expect(result).toEqual(null);
    });
  });
  describe('testing subtract', ()=>{
    it('should return 3', ()=>{
      let result = arithmetic.subtract(6,3);
      expect(result).toEqual(3);
    });
  });
  describe('testing subtract', ()=>{
    it('should return null', ()=>{
      let result = arithmetic.subtract('lulwat', 3);
      expect(result).toEqual(null);
    });
  });
});
