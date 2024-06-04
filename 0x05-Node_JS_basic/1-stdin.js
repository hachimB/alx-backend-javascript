const readline = require('readline');

process.stdin.setEncoding('utf8');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

read.on('line', (input) => {
  process.stdout.write(`Your name is: ${input}\n`);
  read.close();
});

read.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
// process.stdin.setEncoding('utf8');

// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// process.stdin.on('data', (input) => {
//   process.stdout.write(`Your name is: ${input}`);
//   process.stdin.end();
// });

// process.stdin.on('end', () => {
//   process.stdout.write('This important software is now closing\n');
// });
