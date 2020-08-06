const knex = require('knex');
const app =require('../src/app');
const helpers = require('./testHelper');


describe('Character_info Endpoint', ()=> {
  let db;

  const {
    testCharacter,
    testUser,
  }   = helpers.makeCharacterFixtures(); 
});