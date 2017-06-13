'use strict';

// The greet function should have a single parameter name that should expect a string
// The greet function should return the input name concatenated with "Hello, "
// The greet function should return null if the input is not a string

module.exports = function(name) {
  if (typeof name  === 'string') {
    return 'Hello, ' + name;
  } else {
    return null;
  }
};
