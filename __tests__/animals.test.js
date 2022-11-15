const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /animals should return a list of animals', async () => {
    const response = await request(app).get('/animals');
    expect(response.status).toBe(200);
    const expectedResponse = [
      {
        id: '1',
        commonName: 'Common zorro',
        scientificName: 'Dusicyon thous',
      },
      {
        id: '2',
        commonName: 'Lion, south american sea',
        scientificName: 'Otaria flavescens',
      },
      {
        id: '3',
        commonName: 'Collared peccary',
        scientificName: 'Tayassu tajacu',
      },
      {
        id: '4',
        commonName: 'Ground monitor (unidentified)',
        scientificName: 'Varanus sp.',
      },
      {
        id: '5',
        commonName: 'Seal, northern elephant',
        scientificName: 'Mirounga angustirostris',
      },
      {
        id: '6',
        commonName: 'Dove, white-winged',
        scientificName: 'Zenaida asiatica',
      },
      {
        id: '7',
        commonName: 'Grenadier, common',
        scientificName: 'Uraeginthus granatina',
      },
      { id: '8', commonName: 'Nyala', scientificName: 'Tragelaphus angasi' },
    ];

    expect(response.body).toEqual(expectedResponse);
  });
});

afterAll(() => {
  pool.end();
});

// insert into animals (common_name, scientific_name) values ('Wallaby, red-necked', 'Macropus rufogriseus');
