'use strict';

const expect = require('expect');

const greet = require('/lib/greet.js');

describe('testing for greet', () => {
  it('should return hello Rylee', () => {
    expect(greet('World')).toBe('Hello, world!');
  });
  it('should return null for non strings', () => {
    expect(greet(1)).toBe(null);
  });
});
