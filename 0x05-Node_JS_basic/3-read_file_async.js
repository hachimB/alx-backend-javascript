const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fields = {};
        const lines = data.trim().split('\n');
        const messages = [`Number of students: ${lines.length - 1}`];
        console.log(`Number of students: ${lines.length - 1}`);

        for (let i = 1; i < lines.length; i += 1) {
          if (lines[i] !== '') {
            const arrays = lines[i].split(',');
            const field = arrays[3];
            const name = arrays[0];
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(name);
          }
        }

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            messages.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve(messages);
      }
    });
  });
}

module.exports = countStudents;
