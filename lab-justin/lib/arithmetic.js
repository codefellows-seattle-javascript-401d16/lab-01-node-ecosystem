'use strict';

const arithmetic = module.exports = {};

arithmetic.addition = function(a, b){
  if(typeof(a) === 'number' && typeof(b) === 'number'){
    return a + b;
  }
  else{
    return null;
  }
};

arithmetic.subtraction = function(a, b){
  if(typeof(a) === 'number' && typeof(b) === 'number'){
    return a - b;
  }
  else{
    return null;
  }
};
