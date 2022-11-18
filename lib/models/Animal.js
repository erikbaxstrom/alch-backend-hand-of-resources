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

  static async create({ scientificName, commonName }) {
    const { rows } = await pool.query(
      `
    INSERT INTO animals (scientific_name, common_name)
    VALUES ($1, $2)
    RETURNING *;
    `,
      [scientificName, commonName]
    );
    return new Animal(rows[0]);
  }

  static async updateById(id, newAttr) {
    const animal = await Animal.getById(id);
    if (!animal) return null;
    const updatedAnimal = { ...animal, ...newAttr };
    const { rows } = await pool.query(
      `
        UPDATE animals
        SET common_name = $2, scientific_name = $3
        WHERE id = $1
        RETURNING *
        `,
      [id, updatedAnimal.commonName, updatedAnimal.scientificName]
    );

    return new Animal(rows[0]);
  }
}

module.exports = Animal;
