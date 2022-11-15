const { Router } = require('express');
const Location = require('../models/Location.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const resp = await Location.getAll();
    console.log('gotall:', resp);
    res.json(resp);
  } catch (e) {
    next(e);
  }
});
