'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

module.exports = () => {
  return `${greet('Fortunato')}, ${greet(2)}, ${arithmetic.add(2, 4)}, ${arithmetic.add('aaa', 4)}, ${arithmetic.sub(2, 4)}, ${arithmetic.sub('aaa', 4)}`;
};
