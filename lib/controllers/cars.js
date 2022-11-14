const { Router } = require('express');
const Car = require('../models/Car.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const response = await Car.getAll();
    res.json(response);
  } catch (e) {
    next(e);
  }
});
