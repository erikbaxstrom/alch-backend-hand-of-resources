const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('Test People Routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/people should return a list of people and their ids', async () => {
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

  it('/people/:id should return details for a person', async () => {
    const resp = await request(app).get('/people/2');
    const expectedResponse = {
      id: '2',
      firstName: 'Cole',
      lastName: 'Benediktsson',
    };
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual(expectedResponse);
  });

  afterAll(() => {
    pool.end();
  });
});
