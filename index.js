'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet('world!'));
console.log(greet(4));
console.log(arithmetic.add(1, 2));
console.log(arithmetic.add('potato', 2));
console.log(arithmetic.subtract(1, 2));
console.log(arithmetic.subtract('frog', 2));
