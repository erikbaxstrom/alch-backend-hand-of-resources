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

it('GET /locations/:id should return location information', async () => {
  const response = await request(app).get('/locations/1');
  expect(response.status).toBe(200);
  const expectedResponse = {
    id: '1',
    city: 'Oslo',
    country: 'Norway',
  };
  expect(response.body).toEqual(expectedResponse);
});

it('POST /location should add a new location', async () => {
  const newLocation = {
    city: 'Olympia',
    country: 'United States',
  };
  const response = await request(app).post('/locations').send(newLocation);
  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    id: expect.any(String),
    ...newLocation,
  });
});

it('PUT', async () => {
  const response = await request(app)
    .put('/locations/4')
    .send({ city: 'Beijing' });
  console.log('whaaa:', response.body);
  expect(response.status).toBe(200);
  const expectedResponse = {
    id: '4',
    city: 'Beijing',
    country: 'China',
  };
  expect(response.body).toEqual(expectedResponse);
});

afterAll(() => {
  pool.end();
});
