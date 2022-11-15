const { Router } = require('express');
const Location = require('../models/Location.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const response = await Location.getById(req.params.id);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const resp = await Location.getAll();
      res.json(resp);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const resp = await Location.create(req.body);
      res.json(resp);
    } catch (e) {
      next(e);
    }
  });
