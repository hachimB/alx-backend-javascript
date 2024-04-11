export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = students;
    }
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  getLength() {
    return this._length;
  }

  setLength(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  getStudents() {
    return this._students;
  }

  setStudents(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = newStudents;
    }
  }
}
