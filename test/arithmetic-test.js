'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {
  describe('testing add', ()=> {
    it('should return 10', () =>{
      expect(arithmetic.add(5, 5)).toEqual(10);
    });
    it('(word, 50) should return NaN', () =>{
      expect(Number.isNaN(arithmetic.add('word', 50)));
    });
  });
  describe('testing subtract', ()=>{
    it('should return 2', ()=>{
      expect(arithmetic.subtract(8, 6)).toEqual(2);
    });
    it('(word, 50) should return NaN', () =>{
      expect(Number.isNaN(arithmetic.add('word', 50)));
    });
  });
});
