const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /locations should return a list of city, country, and id', async () => {
    const response = await request(app).get('/animals');
    expect(response.status).toBe(200);
    const expectedResponse = [
      {
        id: '1',
        common_name: 'Common zorro',
        scientific_name: 'Dusicyon thous',
      },
      {
        id: '2',
        common_name: 'Lion, south american sea',
        scientific_name: 'Otaria flavescens',
      },
      {
        id: '3',
        common_name: 'Collared peccary',
        scientific_name: 'Tayassu tajacu',
      },
      {
        id: '4',
        common_name: 'Ground monitor (unidentified)',
        scientific_name: 'Varanus sp.',
      },
      {
        id: '5',
        common_name: 'Seal, northern elephant',
        scientific_name: 'Mirounga angustirostris',
      },
      {
        id: '6',
        common_name: 'Dove, white-winged',
        scientific_name: 'Zenaida asiatica',
      },
      {
        id: '7',
        common_name: 'Grenadier, common',
        scientific_name: 'Uraeginthus granatina',
      },
      { id: '8', common_name: 'Nyala', scientific_name: 'Tragelaphus angasi' },
    ];

    expect(response.body).toEqual(expectedResponse);
  });
});

afterAll(() => {
  pool.end();
});

// insert into animals (common_name, scientific_name) values ('Wallaby, red-necked', 'Macropus rufogriseus');
