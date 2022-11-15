const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Test Cars Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /cars should return a list of cars, their color and id', async () => {
    const response = await request(app).get('/cars');
    expect(response.status).toBe(200);
    const expectedResponse = [
      { id: 1, vin: 'SCBFH7ZAXFC303594', color: 'Teal' },
      { id: 2, vin: '3GYFNBE32CS128208', color: 'Fuscia' },
      { id: 3, vin: '1N4AB7AP8EN952800', color: 'Orange' },
      { id: 4, vin: 'WBA6A0C55ED753888', color: 'Maroon' },
      { id: 5, vin: 'JTDJTUD31DD796795', color: 'Goldenrod' },
    ];
    expect(response.body).toEqual(expectedResponse);
  });

  it('GET /cars/:id should return details for a car', async () => {
    const resp = await request(app).get('/cars/4');
    expect(resp.status).toBe(200);
    const expectedResponse = {
      id: 4,
      vin: 'WBA6A0C55ED753888',
      color: 'Maroon',
    };
    expect(resp.body).toEqual(expectedResponse);
  });

  it('POST /car should add a new car', async () => {
    const newCar = {
      id: 5,
      vin: '1N6AA0ED3FN456631',
      color: 'Electric Blue',
    };
    const response = await request(app).post('/cars').send(newCar);
    expect(response.body).toEqual(newCar);
  });

  it('PUT /car/:id should modify an existing car', async () => {
    const response = await request(app)
      .put('/cars/2')
      .send({ color: 'Neon Yellow' });
    const expectedResponse = {
      id: 2,
      vin: '3GYFNBE32CS128208',
      color: 'Neon Yellow',
    };
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

it('stuff', () => {
  try {
    //something
  } catch (e) {
    //catch something
  }
});

afterAll(() => {
  pool.end();
});
