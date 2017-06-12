'use-strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

greet('world!');

console.log(arithmetic.add('A',1));
console.log(arithmetic.sub(3,1));
