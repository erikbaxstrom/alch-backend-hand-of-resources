const { Router } = require('express');
const Animal = require('../models/Animal.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const response = await Animal.getById(req.params.id);
      if (!response) next();
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const resp = await Animal.getAll();
      res.json(resp);
    } catch (e) {
      next(e);
    }
  });
