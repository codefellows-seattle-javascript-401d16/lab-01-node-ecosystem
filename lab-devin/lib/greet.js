'use strict';

module.exports = function (name) {
  if(typeof name !== 'string') {
    return null;
  } else {
    let greeting = 'Hello, ' + name;
    console.log(greeting);
    return greeting;
  }

};
