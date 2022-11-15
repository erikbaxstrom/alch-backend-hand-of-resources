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
}

module.exports = Location;
