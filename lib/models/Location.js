const pool = require('../utils/pool');

class Location {
  id;
  city;
  country;

  constructor(row) {
    this.id = row.id;
    this.city = row.city;
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM locations;`);
    return rows.map((row) => new Location(row));
  }
}

module.exports = Location;
