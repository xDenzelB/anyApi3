const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app')
const Candy = require('../lib/models/Candy');
const res = require('express/lib/response');

describe('anyApi routes', () => {
  beforeEach(() => {

    return setup(pool);
  });

  afterAll(() => {
    pool.end();

  });
  it('should be able to create candy', async () => {
    const candy = { name: 'kisses', type: 'chocolate', quantity: 2 };
    const res = await request(app).post(`/api/v1/candy/`).send(candy);

    expect(res.body).toEqual({
    id: expect.any(String),
     ...candy,
    });
    
  });
  
  // it('should be able to list candy by id', async () => {
  //   const candy = await Candy.insert({ name: 'jellybeans', type: 'fruity', quantity: 3});
  //   const res = await request(app).get(`/api/v1/candy/${candy.id}`);
  
  //   expect(res.body).toEqual(candy);
  // });

  // it('gets a list of candy', async () => {
  //   const candy = await Candy.getAll();
  //   const res = await request(app).get(`/api/v1/candy`);

  //   expect(res.body).toEqual(expected);
  // });
  
  // it('should be able to update candy', async () => {
  //   const candy = await Candy.insert({ name: 'starburst', type: 'fruity', quantity: 2});
  //   const res = await request(app)
  //     .patch(`/api/v1/candy/${candy.id}`)
  //     .send({ name: 'snickers', type: 'chocolate', quantity: 1 });
  
  
  // const expected = {
  //   id: expect.any(String),
  //   name: 'snickers',
  //   type: 'chocolate',
  //   quantity: 1,
  // };
  
  // expect(res.body).toEqual(expected);
  // expect(await getCandyById(candy.id)).toEqual(expected);
  
  // });
  
  // it('should be able to delete candy', async () => {
  //   const candy = await Candy.insert({ name: 'starburst', type: 'fruity', quantity: 2});
  //   const res = await request(app).delete(`/app/v1/candy/${candy.id}`);
  
  //   expect(res.body).toEqual(candy);
  //   expect(await Candy.getById(candy.id)).toBeNull();
  // });
  
})