'use strict';

const expect = require('expect.js');
const greet = require('../lib/greet.js');

describe ('testing greet', () => {
  it ('should return "Hello, world!"', () => {
    let result = greet('world!');
    expect(result).to.eql('Hello, world!');
  });
  it ('should return null', () => {
    let result = greet(4);
    expect(result).to.eql(null);
  });
});
