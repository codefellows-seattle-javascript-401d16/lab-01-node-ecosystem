'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet for hello ryan', () => {

describe('testing greet', () => {
  it('should return Hello, Ryan!',() => {
    let result = greet('Ryan!');
    expect(result).toEqual('Hello, Ryan!');
    });
  });
  describe('testing for non strings', () =>{
    it('should return null', () => {
      let result = greet(6);
      expect(result).toEqual(null);
    });
  });
});
