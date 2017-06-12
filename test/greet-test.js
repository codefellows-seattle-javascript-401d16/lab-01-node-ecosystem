'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe ('greet', function (){
  it ('should return Hello User', function() {
    let greetTest = greet('User');
    expect(greetTest).toEqual('Hello User');
  });
});
