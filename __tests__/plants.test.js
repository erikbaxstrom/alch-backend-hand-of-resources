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
        id: '1',
        commonName: 'Cleveland Cryptantha',
        scientificName: 'Cryptantha clevelandii Greene var. clevelandii',
      },
      {
        id: '2',
        commonName: 'Fremonts Deathcamas',
        scientificName: 'Zigadenus fremontii (Torr.) Torr. ex S. Watson',
      },
      {
        id: '3',
        commonName: 'Oakwoods Ponysfoot',
        scientificName: 'Dichondra recurvata Tharp & M.C. Johnst.',
      },
      {
        id: '4',
        commonName: 'Myrinia Moss',
        scientificName: 'Myrinia Schimp.',
      },
      {
        id: '5',
        commonName: 'Murpheys Century Plant',
        scientificName: 'Agave murpheyi F. Gibson',
      },
    ];

    expect(response.body).toEqual(expectedResponse);
  });
});

afterAll(() => {
  pool.end();
});
