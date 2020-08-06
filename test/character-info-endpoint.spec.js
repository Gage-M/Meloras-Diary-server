const knex = require('knex');
const app =require('../src/app');
const helpers = require('./testHelper');



describe('Character_info Endpoint', ()=> {
  let db;

  const {
    testCharacters,
    testUsers,
  }   = helpers.makeCharacterFixtures(); 

  before('make knex instance', () => {
    db = knex({
      client : 'pg',
      connection : process.env.TEST_DB_URL,
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
      );


      it('should reply with a 200 and an array of content', () =>{
        return supertest(app)
          .get('/api/character')
          .expect(200,testCharacters);
      });
    });

    context('given that there is NOT any content in the database  ', ()=>{
      it('should reply with a 200 and an empty array', () =>{
        return supertest(app)
          .get('/api/character')
          .expect(200,[]);
      });
    });


  });

  describe('POST /api/character', () =>{
    context('when posting content with all needed fields filled... ', ()=>{
      it('it should send 204 and return content as a confirmation', () =>{
            
        const testUser = testUsers[0];

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
          notes : 'A. Cornelius et voluit dare tantum cervo',
        };

        return supertest(app)
          .post('/api/character')
          .set('Authorization' , helpers.makeAuthHeader(testUsers[0]))
          .send(newCharacter)
          .expect(201)
          .expect(res => {
            expect(res.body).to.have.property('id');
            expect(res.body.player_id).to.eql(newCharacter.player_id);
            expect(res.body.character_name).to.eql(newCharacter).character_name;
            expect(res.body.race).to.eql(newCharacter.race);
            expect(res.body.background).to.eql(newCharacter.background);
            expect(res.body.alignment).to.eql(newCharacter.alignment);
            expect(res.body.gender).to.eql(newCharacter.gender);
            expect(res.body.personality_traits).to.eql(newCharacter.personality_traits);
            expect(res.body.ideals).to.eql(newCharacter.ideals);
            expect(res.body.fears).to.eql(newCharacter.fears);
            expect(res.body.notes).to.eql(newCharacter.notes);
            expect(res.header.location).to.eql(`api/character/${res.body.id}`);
            const expectedDate = new Date().toLocaleDateString();
            const actualDate = new Date(res.body.date_created).toLocaleDateString();
            expect(actualDate).to.eql(expectedDate);
          })
          .expect(res => 
            db
              .from('character_info')
              .select()
              .where({id : res.body.id})
              .first()
              .then( row => {
                expect(row.body.player_id).to.eql(newCharacter.player_id);
                expect(row.body.character_name).to.eql(newCharacter).character_name;
                expect(row.body.race).to.eql(newCharacter.race);
                expect(row.body.background).to.eql(newCharacter.background);
                expect(row.body.alignment).to.eql(newCharacter.alignment);
                expect(row.body.gender).to.eql(newCharacter.gender);
                expect(row.body.personality_traits).to.eql(newCharacter.personality_traits);
                expect(row.body.ideals).to.eql(newCharacter.ideals);
                expect(row.body.fears).to.eql(newCharacter.fears);
                expect(row.body.notes).to.eql(newCharacter.notes);
                expect(row.header.location).to.eql(`api/character/${row.body.id}`);
                const expectedDate = new Date().toLocaleDateString();
                const actualDate = new Date(row.body.date_created).toLocaleDateString();
                expect(actualDate).to.eql(expectedDate);
              })
          );

      });
    });
  });

  //   describe('GET api/charter/:charter_id', () =>{
  //       context('[METHOD TYPE] ', ()=>{
  //         it('[it should do.....]', () =>{
  //             return supertest(app)
  //                 ./*method*/
  //         })
  //       })
  //   })

  //   describe('PATCH api/character/:charter_id', () =>{
  //     context('[METHOD TYPE] ', ()=>{
  //       it('[it should do.....]', () =>{
  //           return supertest(app)
  //               ./*method*/
  //       })
  //     })
  // })
  // describe('DELETE api/character/:charter_id', () =>{
  //     context('[METHOD TYPE] ', ()=>{
  //       it('[it should do.....]', () =>{
  //           return supertest(app)
  //               ./*method*/
  //       })
  //     })
  // })




});