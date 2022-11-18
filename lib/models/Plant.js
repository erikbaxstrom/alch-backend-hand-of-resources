const pool = require('../utils/pool');

class Plant {
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
    SELECT * FROM plants;`);
    return rows.map((row) => new Plant(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM plants
        WHERE id = $1;
        `,
      [id]
    );
    if (rows.length === 0) return null;
    return new Plant(rows[0]);
  }

  static async create({ scientificName, commonName }) {
    const { rows } = await pool.query(
      `
    INSERT INTO plants (scientific_name, common_name)
    VALUES ($1, $2)
    RETURNING *;
    `,
      [scientificName, commonName]
    );
    return new Plant(rows[0]);
  }

  static async updateById(id, newAttr) {
    const plant = await Plant.getById(id);
    if (!plant) return null;
    const updatedPlant = { ...plant, ...newAttr };
    const { rows } = await pool.query(
      `
        UPDATE plants
        SET common_name = $2, scientific_name = $3
        WHERE id = $1
        RETURNING *
        `,
      [id, updatedPlant.commonName, updatedPlant.scientificName]
    );

    return new Plant(rows[0]);
  }
  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM plants
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Plant(rows[0]);
  }
}

module.exports = Plant;
