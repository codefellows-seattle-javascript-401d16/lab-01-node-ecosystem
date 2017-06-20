'use strict';


module.exports = (name) => {
  if (typeof name === 'string') {
    console.log('Hello, ', name);
  } else {
    return null;
  }
};
