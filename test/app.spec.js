const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 containing "this is not the endpoint you should try contacting"', ()=> {
    return supertest(app)
      .get('/')
      .expect(200, 'this is not the endpoint you should try contacting');
  });
});