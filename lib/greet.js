'use strict';

module.exports = (name) => (typeof name !== 'string')? null : `hello ${name}`;
