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
    console.log('test got:', response.body);
    const expectedResponse = [
      { id: '1', city: 'Oslo', country: 'Norway' },
      { id: '2', city: 'Göteborg', country: 'Sweden' },
      { id: '3', city: 'Petrovskaya', country: 'Russia' },
      { id: '4', city: 'Jingling', country: 'China' },
      { id: '5', city: 'Xiaozhang', country: 'China' },
    ];
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

afterAll(() => {
  pool.end();
});
