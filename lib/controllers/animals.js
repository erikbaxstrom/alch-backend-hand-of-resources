const { Router } = require('express');
const Animal = require('../models/Animal.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const resp = await Animal.getAll();
    res.json(resp);
  } catch (e) {
    next(e);
  }
});
