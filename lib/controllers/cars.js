const { Router } = require('express');
const Car = require('../models/Car.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const response = await Car.getById(req.params.id);
      if (!response) next();
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const response = await Car.getAll();
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const response = await Car.createCar(req.body);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const response = await Car.updateById(req.params.id, req.body);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const response = await Car.deleteById(req.params.id);
      if (!response) {
        next();
      }
      res.json(response);
    } catch (e) {
      next(e);
    }
  });
