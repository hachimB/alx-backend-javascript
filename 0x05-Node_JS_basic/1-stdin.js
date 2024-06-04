// const readline = require('readline');

// const read = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log('Welcome to Holberton School, what is your name?');

// read.on('line', (input) => {
//   console.log(`Your name is: ${input}`);
//   read.close();
// });

// read.on('close', () => {
//   console.log('This important software is now closing');
// });

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
  });
  
readline.question('Welcome to Holberton School, what is your name? \n', (name) => {
  console.log(`Your name is: ${name}`);
  readline.close();
  });
  
process.on('exit', () => {
  console.log('This important software is now closing');
  });
