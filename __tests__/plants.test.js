const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Test Plants Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /plants should return a list of plants', async () => {
    const response = await request(app).get('/plants');
    expect(response.status).toBe(200);
    const expectedResponse = [
      {
        common_name: 'Cleveland Cryptantha',
        scientific_name: 'Cryptantha clevelandii Greene var. clevelandii',
      },
      {
        common_name: 'Fremont Deathcamas',
        scientific_name: 'Zigadenus fremontii (Torr.) Torr. ex S. Watson',
      },
      {
        common_name: 'Oakwoods Ponysfoot',
        scientific_name: 'Dichondra recurvata Tharp & M.C. Johnst.',
      },
      { common_name: 'Myrinia Moss', scientific_name: 'Myrinia Schimp.' },
      {
        common_name: 'Murpheys Century Plant',
        scientific_name: 'Agave murpheyi F. Gibson',
      },
    ];

    expect(response.body).toEqual(expectedResponse);
  });
});

afterAll(() => {
  pool.end();
});
