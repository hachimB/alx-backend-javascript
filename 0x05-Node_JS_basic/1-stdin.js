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

const readlineSync = require('readline-sync');

console.log('Welcome to Holberton School, what is your name?');
const name = readlineSync.question();
console.log(`Your name is: ${name}`);
console.log('This important software is now closing');
