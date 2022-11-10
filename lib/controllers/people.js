const { Router } = require('express');
const Person = require('../models/Person');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const response = await Person.getPersonById(req.params.id);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const response = await Person.getAll();
      res.json(response);
    } catch (e) {
      next(e);
    }

    // catch error, call next w/ error
  });
