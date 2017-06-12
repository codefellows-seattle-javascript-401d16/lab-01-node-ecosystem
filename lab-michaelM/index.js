'use-strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

greet('world!');

console.log(arithmetic.add('A','b'));
console.log(arithmetic.sub(3,1));
