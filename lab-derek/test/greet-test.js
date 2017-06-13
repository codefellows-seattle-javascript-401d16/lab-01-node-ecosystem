'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe ('greet', function (){
  it ('should return Hello, World', function() {
    let greetTest = greet('World');
    expect(greetTest).toEqual('Hello, World');
  });
});
