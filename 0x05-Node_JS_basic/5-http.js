const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';
const databasePath = `${__dirname}/database.csv`;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    countStudents(databasePath)
      .then((data) => {
        res.write('This is the list of our students\n');
        data.forEach((item) => res.write(`${item}\n`));
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
