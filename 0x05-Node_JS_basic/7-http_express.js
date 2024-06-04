const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';
const databasePath = `${__dirname}/database.csv`;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then((data) => {
      res.send(`This is the list of our students\n${data.join('\n')}`);
    })
    .catch((error) => {
      res.status(500).send(`An error occurred: ${error.message}`);
    });
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
