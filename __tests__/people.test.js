const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('Test People Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /people should return a list of people and their ids', async () => {
    const resp = await request(app).get('/people');
    expect(resp.status).toBe(200);
    const expectedResponse = [
      { id: '1', firstName: 'Rod', lastName: 'Huntar' },
      { id: '2', firstName: 'Cole', lastName: 'Benediktsson' },
      { id: '3', firstName: 'Darb', lastName: 'Hubbert' },
      { id: '4', firstName: 'Rafe', lastName: 'Killelea' },
      { id: '5', firstName: 'Jim', lastName: 'Hibling' },
    ];
    expect(resp.body).toEqual(expectedResponse);
  });

  it('GET /people/:id should return details for a person', async () => {
    const resp = await request(app).get('/people/2');
    const expectedResponse = {
      id: '2',
      firstName: 'Cole',
      lastName: 'Benediktsson',
    };
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual(expectedResponse);
  });

  it('POST /people should add a new person', async () => {
    const newPerson = {
      firstName: 'Billy',
      lastName: 'Johnson',
    };
    const expectedResponse = {
      id: expect.any(String),
      ...newPerson,
    };
    const resp = await request(app).post('/people').send(newPerson);
    expect(resp.body).toEqual(expectedResponse);
  });

  it('PUT /people/:id should update a person', async () => {
    const resp = await request(app)
      .put('/people/2')
      .send({ lastName: 'Hubbybubby' });
    const expectedResponse = {
      id: '2',
      firstName: 'Cole',
      lastName: 'Hubbybubby',
    };
    expect(resp.body).toEqual(expectedResponse);
  });

  it('DELETE /people/:id should delete a person', async () => {
    console.log('starting delete!!');
    const resp = await request(app).delete('/people/3');
    console.log('deleted done. resp.body:', resp.body);
    expect(resp.status).toBe(200);

    console.log('starting redelete!!');
    const noResp = await request(app).get('/people/3');
    console.log('redelete done. resp.body:', noResp.body);
    expect(noResp.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
