const { Router } = require('express');
const Person = require('../models/Person');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const response = await Person.getAll();
    res.json(response);
  } catch (e) {
    console.log('e:', e);
    next(e);
  }

  // catch error, call next w/ error
});
