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
}

module.exports = Car;
