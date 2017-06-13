'use strict';
const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

const output = module.exports = () => {
  return `${greet('Adan')}, ${greet(6)}, ${arithmetic.add(2, 8)}, ${arithmetic.add('wat', 8)}, ${arithmetic.sub(7, 4)}, ${arithmetic.sub('wat', 4)}`;
};

console.log(output());
