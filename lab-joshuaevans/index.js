'use strict';

const arithmetic = require('./lib/arithmetic.js');
const greet = require('./lib/greet.js');

const out = module.exports = () => {
  return greet('Josh'), arithmetic.add(1,2), arithmetic.suv(3,2);
};

console.log(out());
