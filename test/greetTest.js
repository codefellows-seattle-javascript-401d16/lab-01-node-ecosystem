'use strict';



const greet = require('../lib/greet.js');
const expect = require('expect');

describe('testing for greet', () => {
  it('should return hello Rylee', () => {
    let result = greet('world!');
    expect(result).toBe('Hello world!');
  });
  it('should return null for non strings', () => {
    let result = greet(3);
    expect(result).toBe(null);
  });
});
