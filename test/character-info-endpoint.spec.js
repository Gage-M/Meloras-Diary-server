const knex = require('knex');
const app =require('../src/app');
const helpers = require('./testHelper');
const { head } = require('../src/app');


describe('Character_info Endpoint', ()=> {
  let db;

  const {
    testCharacters,
    testUsers,
  }   = helpers.makeCharacterFixtures(); 

  before('make knex instance', () => {
    db = knex({
      client : 'pg',
      connection : process.env.TEST_URL,
    });
    app.set('db',db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.clearTable(db));

  afterEach('cleanup' ,()=> helpers.clearTable(db));

  describe(' GET /api/character', () =>{

      context('given that there is content in the database ', ()=>{

        beforeEach('inserts content', ()=> 
        helpers.seedCharacterTable(db,testUsers,testCharacters)
        )


        it('should reply with a 200 and an array of content', () =>{
            return supertest(app)
                .get('api/character')
                .expect(200,testCharacters)
        })
      })

      context('given that there is NOT any content in the database  ', ()=>{
        it('should reply with a 200 and an empty array', () =>{
            return supertest(app)
                .get('api/character')
                .expect(200,[])
        })
      })


  })

  describe('POST /api/character', () =>{
      context('when posting content with all needed fields filled... ', ()=>{
        it('it should send 204 and return content as a confirmation', () =>{
            
            const testUser = testUsers[0]

            const newCharacter = {
                    player_id : testUser.id ,
                    character_name :'new user' ,
                    race : 'human',
                    background : 't-pose town folk',
                    alignment : 'Neutral',/*ENUM*/
                    gender : 'Male', /*ENUM*/
                    personality_traits : `
                    Im 'walking
                    Im 'non faciam a vobis neque ab aliis ad insaniam convertunt
                    Im 'walking
                    Donec inveniam ambulans me`,
                    ideals : `
                    Interdum suus 'optimus pugna dare sursum
                    Quod est magni vere scio quod Im rectum`,
                    fears : `Quod suus 'difficile celare me et te
                    Quod suus 'sic profundus intus esse mentitus
                    Tibi gratias ago pro auxilio
                    Sed nihil melius est non inveniet
                    In hoc mundo pulchra
                    Et non ambulant in sempiternum` ,
                    notes : `A. Cornelius et voluit dare tantum cervo`,
            }

            return supertest(app)
                .post('api/character')
                .set('Authorization' , helpers.makeAuthHeader(testUsers[0]))
                .send(newCharacter)
                .expect(201)

        })
      })
  })

  describe('GET api/charter/:charter_id', () =>{
      context('[METHOD TYPE] ', ()=>{
        it('[it should do.....]', () =>{
            return supertest(app)
                ./*method*/
        })
      })
  })

  describe('PATCH api/character/:charter_id', () =>{
    context('[METHOD TYPE] ', ()=>{
      it('[it should do.....]', () =>{
          return supertest(app)
              ./*method*/
      })
    })
})
describe('DELETE api/character/:charter_id', () =>{
    context('[METHOD TYPE] ', ()=>{
      it('[it should do.....]', () =>{
          return supertest(app)
              ./*method*/
      })
    })
})




});