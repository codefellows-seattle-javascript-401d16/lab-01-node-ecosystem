const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

process.stdin.setEncoding('utf8');
process.stdout.write('SUPER FUN LAB ONE!\n');
process.stdout.write('greet [msg] - get greeted\n');
process.stdout.write('add [num] [num] - add two numbers\n');
process.stdout.write('sub [num] [num] - subtract two numbers\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if(input !== null) {
    const inputArray = input.trim().split(' ');
    if(inputArray[0] === 'greet') {
      if(inputArray[1]) {
        process.stdout.write(greet(inputArray[1]) + '\n');
      } else {
        process.stdout.write('Hi there!\n');
      }
    } else if(inputArray[0] === 'add' || inputArray[0] === 'sub') {
      const first = Number.parseInt(inputArray[1], 10);
      const second = Number.parseInt(inputArray[2], 10);
      if(first && second) {
        let result;
        if(inputArray[0] === 'add') {
          result = arithmetic.add(first, second);
        } else {
          result = arithmetic.sub(first, second);
        }

        if(result) {
          process.stdout.write(`Result: ${result}\n`);
        } else {
          process.stdout.write('Something went wrong!\n');
        }
      } else {
        process.stdout.write('That requires two numbers, silly!\n');
      }
    } else {
      process.stdout.write('What?\n');
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('Goodbye!\n');
});
