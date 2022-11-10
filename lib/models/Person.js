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
    SELECT * FROM people;
    `);
    return rows.map((row) => new Person(row));
  }

  static async getPersonById(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM people
    WHERE id = $1
    `,
      [id]
    );
    if (rows.length === 0) {
      return id;
    }
    return new Person(rows[0]);
  }
}

module.exports = Person;
