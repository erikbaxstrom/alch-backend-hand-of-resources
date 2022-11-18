const { Router } = require('express');
const Plant = require('../models/Plant.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const response = await Plant.getAll();
    if (!response) next();
    res.json(response);
  } catch (e) {
    next(e);
  }
});
