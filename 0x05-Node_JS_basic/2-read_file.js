const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, { encoding: 'utf8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const fields = {};
  const lines = data.trim().split('\n');
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
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
};

module.exports = countStudents;
