# Lab 01

## Functionality
- index.js invokes greet, arithmetic.add, and arithmetic.sub both with valid arguments and invalid arguments to check if it works correctly for each type.
- greet will say Hello to the argument
- arithmetic.add adds to arguments together and returns that value
- arithmetic.sub subtracts the second argument from the first and returns that value
- greet expects 1 string, arithmetic.add expects 2 numbers, arithmetic.sub expects 2 numbers. They will return null otherwise.

## Tests
- Tests for all 3 functions, greet, arithmetic.add, arithmetic.sub, will check to make sure they return the correct output given both valid and invalid arguments.
- The test for index.js makes sure the output of output() will be equal to the expected values. It basically just runs all the tests of the other 3 in one.

## Examples
- greet('Spencer') === Hello, Spencer
- arithmetic.add(2, 5) === 7
- arithmetic.sub(5, 2) === 3
