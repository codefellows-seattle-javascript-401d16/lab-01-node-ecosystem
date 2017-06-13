'use strict';

const expect = require('expect');
const greet = require ('../lib/greet.js');
const arithmetic = require ('../lib/arithmetic.js');

describe ('testing module greet.js', function(){
  it('this should return "Hello, world"', function(){
    expect(greet('world')).toEqual('Hello, world');
  });
  it ('return null if value is not a string', function(){
    expect(greet(false)).toEqual(null);
  });
});

describe('testing module arithmetic.js', function(){
  it('this should add the two integers', function(){
    expect(arithmetic.add(3,3)).toEqual(6);
    expect(arithmetic.add(10,3)).toEqual(13);
  });
  it('error', function (){
    expect(arithmetic.add('',3)).toEqual(null);
  });
  it('error',function () {
    expect(arithmetic.add(2,'')).toEqual(null);
  });
  it('this should state "null"', ()=> {
    expect(arithmetic.add(2,true)).toEqual(null);
  });

  it('this should subtract the two integers', function(){
    expect(arithmetic.subtract(10,3)).toEqual(7);
  });
});
