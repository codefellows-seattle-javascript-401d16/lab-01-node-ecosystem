# Writing and testing modules

This project consists of two modules name arithmetic.js and greet.js in the lib directory, and two test modules named arithmetic-test.js and greet-test.js in the test directory.

## arithmetic.js

arithmetic.js has two functions, arithmetic.add and arithmetic.subtract, which each take two arguments and return the values of their addition and subtraction, respectively. If any argument is not a number, the return will be null.

## greet.js

greet.js has one anonymous function which takes a single argument and returns "Hello, argument!". If the argument is not a string, the return will be null.

## arithmetic-test.js

arithmetic-test.js tests both arithmetic functions to ensure that if the arguments are numbers they will return the correct result of their given arithmetic, or if the arguments are not numbers they will return null.

## greet-test.js

greet-test.js tests the anonymous function in greet.js to ensure that if the argument is a string that it returns "Hello, argument!", or if the argument is not a string that it returns null.
