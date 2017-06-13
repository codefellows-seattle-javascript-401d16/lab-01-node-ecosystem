![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 401 JS -- Class 01 node ecosystem
===

## Description
  * This project was fairly simple. First i created functions that achieved the output requested then i exported those functions to index.js and created testing for each of those functions. The part that i had the most trouble with was the testing for a number or string, but with some help from classmates and the expect docs i was able to solve it.
  * Question: how the heck do we create tests for the command line?

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will be able to set up a directory for creating an npm package
* Students will be able to create and use CommonJS modules
* Students will be able to write synchronous unit tests

## Resources  
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Mocha docs](http://mochajs.org/#getting-started)

## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, etc that are required -->
Your lab directory must include  
* **README.md** -- with a documentation about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.package.json** -- with all dependencies and dev-dependencies
* **lib/** -- a lib direcotry for holding your modules
* **test/** -- a test directory for holding your unit tests

#### Feature Tasks  
* Create a nodejs module named greet.js that exports a single function
 * The greet function should have a single parameter name that should expect a string
 * The greet function should return the input name concatenated with "Hello, "
 * The greet function should return null if the input is not a string
* Create a nodejs module named arithmetic
 * The arithmetic.js module should have `add` and `sub` methods
 * `add` should have to params that should expect a number, it should return the sum of the to numbers
 * `sub` should have to params that should expect a number, it should return the first argument minus the second argument
 * decide on an expected behavior for non number inputs

#### Testing  
* Write a test the expects the greet module to return "Hello, world!" when invoked with "world!" as a parameter
* Write a test that expects the greet module to return null when you use non string values
* Write test for the `add` and `subtract` methods on the arithmetic module
 * Write a test that ensures the functions work as you expect with number inputs
 * Write a test that ensures the functions work as expected with non number inputs

####  Documentation  
* Write a description of your project in your README.md

###### BONUS 1pt
* Write a test for the index.js CLI

## Rubric  
* 2pts Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
