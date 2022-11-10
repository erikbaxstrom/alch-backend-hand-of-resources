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

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from people;
    `);
    return rows.map((row) => new Person(row));
  }
}

module.exports = Person;
