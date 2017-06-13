'use strict';

const arithmetic = module.exports = {};

//function to add two numbers passed as parameters
arithmetic.add = (a, b) => {
  if(!isNaN(a) && !isNaN(b)){
    return a + b;
  }
  return 'Not a Valid Number';
};

//function to substract the  two number passed as parameters
arithmetic.sub = (a, b) => {
  if(!isNaN(a) && !isNaN(b)){
    return a - b;
  }
  return 'Not a Valid Number';
};
