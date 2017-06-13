'use strict';

module.exports = function(name){
  return typeof name === 'string' ? 'Hello, '+ name : null;
};
