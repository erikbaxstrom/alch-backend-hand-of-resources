const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Test Locations Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  //tests
  it('GET /locations should return a list of city, country, and id', async () => {
    const response = await request(app).get('/locations');
    const expectedResponse = [
      { id: 1, country: 'Oslo', city: 'Norway' },
      { id: 2, country: 'Göteborg', city: 'Sweden' },
      { id: 3, country: 'Petrovskaya', city: 'Russia' },
      { id: 4, country: 'Jingling', city: 'China' },
      { id: 5, country: 'Xiaozhang', city: 'China' },
    ];
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

afterAll(() => {
  pool.end();
});
