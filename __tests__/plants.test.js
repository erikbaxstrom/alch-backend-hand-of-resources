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

  it('GET /plants/:id should return a plant', async () => {
    const response = await request(app).get('/plants/4');
    expect(response.status).toBe(200);
    const expectedResponse = {
      id: '4',
      commonName: 'Myrinia Moss',
      scientificName: 'Myrinia Schimp.',
    };
    expect(response.body).toEqual(expectedResponse);
  });

  it('POST /plants should add a new plant', async () => {
    const newPlant = {
      commonName: 'Flavopunctelia Lichen',
      scientificName: 'Flavopunctelia praesignis (Nyl.) Hale',
    };
    const response = await request(app).post('/plants').send(newPlant);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: expect.any(String),
      ...newPlant,
    });
  });

  it('PUT /plants/:id should update a plant', async () => {
    const response = await request(app)
      .put('/plants/1')
      .send({ scientificName: 'Planty McFacePlant' });
    expect(response.status).toBe(200);
    const expectedResponse = {
      id: '1',
      commonName: 'Cleveland Cryptantha',
      scientificName: 'Planty McFacePlant',
    };
    expect(response.body).toEqual(expectedResponse);
  });

  it('DELETE /plant/:id should delete a plant', async () => {
    const response = await request(app).delete('/plants/5');
    expect(response.status).toBe(200);

    const noResp = await request(app).get('/plants/5');
    expect(noResp.status).toBe(404);
  });
});

afterAll(() => {
  pool.end();
});
