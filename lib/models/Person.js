const pool = require('../utils/pool');

class Person {
  id;
  firstName;
  lastName;

  constructor(row) {
    this.id = row.id;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
  }
}

module.exports = { Person };
