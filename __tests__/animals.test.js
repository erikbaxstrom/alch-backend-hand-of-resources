const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('test', async () => {});
});

afterAll(() => {
  pool.end();
});

// insert into animals (common_name, scientific_name) values ('Wallaby, red-necked', 'Macropus rufogriseus');
