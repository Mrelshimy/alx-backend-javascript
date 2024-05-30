export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this.students = students;
  }

  get name() {
    return (this._name);
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return (this._length);
  }

  set length(length) {
    if (!Number.isIntege(length)) {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return (this._students);
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('students must be an array of strings');
    }

    students.forEach((element) => {
      if (typeof element !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = students;
  }
}
