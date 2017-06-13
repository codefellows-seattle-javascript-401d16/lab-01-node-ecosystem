'use strict';

const expect = require('expect.js');
const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {
  describe('testing arthimetic.add', ()=> {
    it('should return 10', () =>{
      expect(arithmetic.add(5, 5)).to.eql(10);
    });
    it('should return NaN', () =>{
      expect(Number.isNaN(arithmetic.add('cat', 5))).to.be.ok();
    });
  });
  describe('testing arthimetic.sub', ()=>{
    it('should return 0', ()=>{
      expect(arithmetic.sub(5, 5)).to.eql(0);
    });
    it('should return NaN', ()=>{
      expect(Number.isNaN(arithmetic.sub('cat', 5))).to.be.ok();
    });
  });
});

describe('testing greet', ()=>{
  it('should return Hello, world!', ()=>{
    expect(greet('world!')).to.be('Hello, world!');
  });
  it('should return null', ()=>{
    expect(greet(3)).to.be(null);
  });
});
