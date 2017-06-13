'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet function for valid strings', () =>{
  it('should return Hello, World!', () => {
    let result = greet('World!');
    expect(result).toEqual('Hello, World!');
  });
});
