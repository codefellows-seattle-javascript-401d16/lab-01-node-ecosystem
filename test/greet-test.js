'use strict';
const expect = require('expect');

const greet = require('../lib/greet.js');



describe('testing greeting', ()=>{
  it('should return hello saul', ()=>{
    expect(greet('world')).toEqual('hello world');
  });
  it('should return a string', ()=>{
    expect(greet('world')).toBeA('string', 'hello world');
  });
});
