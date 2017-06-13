'use strict';
const expect = require('expect');

const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');


//   it('should return a valid string', function() {
//     assert.equal(typeof greet.hello('saul'), 'string');


describe('testing greeting', ()=>{
  it('should return hello saul', ()=>{
    expect(greet('world')).toEqual('hello world');
  });
});



describe('testing arithmetic', () => {
  describe('testing add', ()=> {
    it('should return 10', () =>{
      expect(arithmetic.add(5, 5)).toEqual(10);
    });
  });
  describe('testing subtract', ()=>{
    it('should return 2', ()=>{
      expect(arithmetic.subtract(8, 6)).toEqual(2);
    });
  });
});
