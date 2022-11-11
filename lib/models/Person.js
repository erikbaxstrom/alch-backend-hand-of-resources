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

  static async createPerson({ firstName, lastName }) {
    const { rows } = await pool.query(
      `
      INSERT INTO people (first_name, last_name)
      VALUES ($1, $2)
      RETURNING *
      `,
      [firstName, lastName]
    );
    return new Person(rows[0]);
  }

  static async updatePerson(id, newAttr) {
    const person = await Person.getPersonById(id);
    if (!person) return null;

    const updatedPerson = { ...person, ...newAttr };
    console.log('updatedPerson', updatedPerson);
    const { rows } = await pool.query(
      `
    UPDATE people
    SET first_name = $2, last_name = $3
    WHERE id = $1
    RETURNING *;
    `,
      [id, updatedPerson.firstName, updatedPerson.lastName]
    );
    return new Person(rows[0]);
  }
}

module.exports = Person;
