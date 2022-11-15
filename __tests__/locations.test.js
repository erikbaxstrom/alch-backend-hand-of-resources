const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Test Locations Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  //tests
});

afterAll(() => {
  pool.end();
});
