'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet('world!'));

// blah();

console.log('arithmetic.add(1,2)', arithmetic.add(1,2));
console.log('arithmetic.sub(3,2)', arithmetic.sub(3,2));
