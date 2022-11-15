const pool = require('../utils/pool');

class Animal {
  id;
  commonName;
  scientificName;
  constructor(row) {
    this.id = row.id;
    this.commonName = row.common_name;
    this.scientificName = row.scientific_name;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM animals;`);
    return rows.map((row) => new Animal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM animals
        WHERE id = $1;
        `,
      [id]
    );
    if (rows.length === 0) return null;
    return new Animal(rows[0]);
  }
}

module.exports = Animal;
