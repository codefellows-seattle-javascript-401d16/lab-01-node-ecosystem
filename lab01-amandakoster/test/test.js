'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing greet', () => {
  describe('testing greet', () => {
    it('should return Hello, world!', () => {
      let result = greet('world!');
      expect(result).toEqual('Hello, world!');
    });
  });
  describe('null', () => {
    it('should return null', () => {
      let result = greet(2);
      expect(result).toEqual(null);
    });
  });
});


const arithmetic = require('../lib/arithmetic.js');


describe('testing arithmetic', () => {
  describe('testing add', () => {
    it('should return 4', () => {
      let result = arithmetic.add(2, 2);
      expect(result).toEqual(4);
    });
  });

  describe('testing add', () => {
    it('should return null', () => {
      let result = arithmetic.add('what', 3);
      expect(result).toEqual(null);
    });
  });
});

describe('testing subtract', () => {
  it('should return 3', () => {
    let result = arithmetic.subtract(6, 3);
    expect(result).toEqual(3);
  });
});
describe('testing subtract', () => {
  it('should return null', () => {
    let result = arithmetic.subtract('what', 3);
    expect(result).toEqual(null);
  });
});
