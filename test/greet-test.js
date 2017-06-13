'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('Testing single function in greet module.', function(){
  it('should return Hello world!', () => {
    let result = greet('world!');
    expect(result).toEqual('Hello world!');
  });
  it('should return null when param is not a string', () => {
    let result = greet(4);
    expect(result).toEqual(null);
  });
});
