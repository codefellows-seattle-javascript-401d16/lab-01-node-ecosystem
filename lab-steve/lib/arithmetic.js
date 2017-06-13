'use strict';

const arithmetic = module.exports = {}

arithmetic.add = function(a,b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  else if (typeof a !== 'number') {
    return 'a is NaN!';
  }
  else if (typeof b !== 'number') {
    return 'b is NaN!';
  }
}

arithmetic.sub = function(a,b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  else if (typeof a !== 'number') {
    return 'a is NaN!';
  }
  else if (typeof b !== 'number') {
    return 'b is NaN!';
  }
}
