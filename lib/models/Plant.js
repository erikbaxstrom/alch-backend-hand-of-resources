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
}

module.exports = Plant;
