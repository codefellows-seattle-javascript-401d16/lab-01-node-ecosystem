'use strict';

module.exports = function(name){
  if (typeof name !== 'string') throw new Error('expected string');
  return 'Hello, ' + name;
};
