'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet('Oscar'));
console.log('Your Numbers are ', arithmetic.add(2, 2));
console.log('Your Numbers are ', arithmetic.sub(2, 2));
