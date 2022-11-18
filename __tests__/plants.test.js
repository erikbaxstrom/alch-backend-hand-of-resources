const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Test Plants Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('test', async () => {
    //test
  });
});

afterAll(() => {
  pool.end();
});
