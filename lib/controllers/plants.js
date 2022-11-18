const { Router } = require('express');
const Plant = require('../models/Plant.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const response = await Plant.getById(req.params.id);
      if (!response) next();
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const response = await Plant.getAll();
      if (!response) next();
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const resp = await Plant.create(req.body);
      res.json(resp);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const response = await Plant.updateById(req.params.id, req.body);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const response = await Plant.deleteById(req.params.id);
      if (!response) next();
      res.json(response);
    } catch (e) {
      next(e);
    }
  });
