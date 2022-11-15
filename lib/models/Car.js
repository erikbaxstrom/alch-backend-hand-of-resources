const pool = require('../utils/pool');

class Car {
  id;
  vin;
  color;

  constructor(row) {
    this.id = row.id;
    this.vin = row.vin;
    this.color = row.color;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * FROM cars;
    `);
    return rows.map((row) => new Car(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM cars
    where id = $1`,
      [id]
    );
    if (rows.length === 0) return null;
    return new Car(rows[0]);
  }
}

module.exports = Car;
