'use strict';

const greet = module.exports = (name) => {
  if(typeof name !== 'string')
    return `Hello ${name}`;
  return null;
};
