'use strict';

const expect = require('expect');
const { exec } = require('child_process');
var errorTxt = null;

describe('testing index.js', function() {
  before(function(){
    exec('node ../index.js', (error, stdout, stderr) => {
      errorTxt = error;
    });
    console.log(errorTxt);
  });
  before( function(){ console.log('before'); })
  after( function(){ console.log('after'); });
  it('should return no errors', function () {
    expect(errorTxt).toEqual(null);
  });
});
