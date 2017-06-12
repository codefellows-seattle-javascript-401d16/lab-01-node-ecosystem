'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

const output = module.exports = () => {
  return `${greet('Spencer')}, ${greet(2)}, ${arithmetic.add(3, 4)}, ${arithmetic.add('asd', 4)}, ${arithmetic.sub(3, 4)}, ${arithmetic.sub('asd', 4)}`; // Hello, Spencer, 7, null, -1, null
};

console.log(output());
