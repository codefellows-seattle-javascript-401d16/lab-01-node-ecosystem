'use strict';

const arthmetic = module.exports = {};

arthmetic.add = function (a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    alert('invalid input');
  } else {
    let total = a + b;
    return total;
  }

};

arthmetic.subtract = function (a,b) {
  if(typeof a != 'number' || typeof b != 'number') {
    alert('invalid input');
  } else {
    let diff = a - b;
    return diff;
  }

};
