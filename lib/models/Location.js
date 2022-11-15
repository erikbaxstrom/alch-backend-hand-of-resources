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

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM locations
        WHERE id = $1;
        `,
      [id]
    );
    if (rows.length === 0) return null;
    return new Location(rows[0]);
  }

  static async create({ city, country }) {
    const { rows } = await pool.query(
      `
    INSERT INTO locations (city, country)
    VALUES ($1, $2)
    RETURNING *;
    `,
      [city, country]
    );
    return new Location(rows[0]);
  }

  static async updateById(id, newAttr) {
    const location = await Location.getById(id);
    if (!location) return null;
    const updatedLocation = { ...location, ...newAttr };
    const { rows } = await pool.query(
      `
        UPDATE locations
        SET city = $2, country = $3
        WHERE id = $1
        RETURNING *
        `,
      [id, updatedLocation.city, updatedLocation.country]
    );

    // if (rows.length === 0) return null;
    return new Location(rows[0]);
  }
}

module.exports = Location;
