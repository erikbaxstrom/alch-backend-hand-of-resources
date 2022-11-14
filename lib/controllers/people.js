const { Router } = require('express');
const Person = require('../models/Person');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const response = await Person.getPersonById(req.params.id);
      if (!response) {
        next();
      }
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
  })
  .post('/', async (req, res, next) => {
    try {
      const response = await Person.createPerson(req.body);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const response = await Person.updatePerson(req.params.id, req.body);
      res.json(response);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const response = await Person.deletePerson(req.params.id);
      console.log('controller response:', response);
      if (!response) {
        console.log('controller calling next instead of returning thing');
        next();
      }
      res.json(response);
    } catch (e) {
      next(e);
    }
  });
