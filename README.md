![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 401 JS -- Class 01 node ecosystem
===

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
* **README.md** -- with a documentation about your lab - DONE
* **.gitignore** -- with a robust gitignore -done
* **.eslintrc** -- with the class .eslintrc file DONE
* **.eslintignore** -- with the class .eslintignore- DONE
* **.package.json** -- with all dependencies and dev-dependencies - DONE
* **lib/** -- a lib direcotry for holding your modules -DONE
* **test/** -- a test directory for holding your unit tests -DONE

#### Feature Tasks  
* Create a nodejs module named greet.js that exports a single function - DONE
 * The greet function should have a single parameter name that should expect a string -DONE
 * The greet function should return the input name concatenated with "Hello, " - DONE
 * The greet function should return null if the input is not a string - DONE
* Create a nodejs module named arithmetic -DONE
 * The arithmetic.js module should have `add` and `sub` methods - DONE
 * `add` should have to params that should expect a number, it should return the sum of the to numbers DONE
 * `sub` should have to params that should expect a number, it should return the first argument minus the second argument -DONE
 * decide on an expected behavior for non number inputs -DONE, decided on null...

#### Testing  
* Write a test the expects the greet module to return "Hello, world!" when invoked with "world!" as a parameter-done -DONE
* Write a test that expects the greet module to return null when you use non string values-done-DONE
* Write test for the `add` and `subtract` methods on the arithmetic module-done-DONE
 * Write a test that ensures the functions work as you expect with number inputs-done
 * Write a test that ensures the functions work as expected with non number inputs-done

####  Documentation  
* Write a description of your project in your README.md-DONE

###### BONUS 1pt
* Write a test for the index.js CLI

## Rubric  
* 2pts Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
