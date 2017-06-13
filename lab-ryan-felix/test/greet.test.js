'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe('testing greet', () => {

  it('should greet correctly', () => {
    expect(greet('world!')).toEqual('Hello, world!');
  });

  it('should return null for a non-string input', () => {
    expect(greet(3)).toNotExist();
    expect(greet({})).toNotExist();
    expect(greet()).toNotExist();
    expect(greet(['array!'])).toNotExist();
  });

});
