'use strict';

module.exports = function(name) {
  if (typeof name === 'string') {
    return 'Hello, ' + name;
  } else {
    return null;
  }
};


// Does the same thing as above
// module.exports = (name) =>
//   typeof name === 'string' ? `Hello, ${name}!` : null;
