const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 containing "OwO wi mwaking gwod pwa gwas!"', ()=> {
    return supertest(app)
      .get('/')
      .expect(200, 'OwO wi mwaking gwod pwa gwas!');
  });
});