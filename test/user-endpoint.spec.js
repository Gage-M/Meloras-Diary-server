const knex = require('knex');
const app =require('../src/app');
const helpers = require('./testHelper');
const { expect } = require('chai');
const supertest = require('supertest');



describe('user Endpoint', ()=> {
  let db;

  const testUsers = helpers.makeUsersArray(); 

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

  describe(' GET /api/user', () =>{

    context('given that there is content in the database ', ()=>{

      beforeEach('inserts content', ()=> 
        helpers.seedUsers(db,testUsers)
      );

      
      
      it('should reply with a 200 and an array of content', () =>{

        const expectedUser= testUsers.map(user => {
          return {
            id : user.id ,
            user_name: user.user_name,
            password : user.user_password,
            irl_name : user.irl_name,
            date_created : user.date_created
          }
        })

        return supertest(app)
          .get('/api/user')
          .expect(200, expectedUser);
      });
    });

    context('given that there is NOT any content in the database  ', ()=>{
      it('should reply with a 200 and an empty array', () =>{
        return supertest(app)
          .get('/api/user')
          .expect(200,[]);
      });
    });


  });

  describe('POST /api/user', () =>{
   
    context('when posting content with all needed fields filled... ', ()=>{

      it('it should send 204 and return content as a confirmation', () =>{
            
        const newUser = {
          irl_name : 'new',
          user_name : 'new user',
          user_password : 'new password'
        };

        return supertest(app)
          .post('/api/user')
          .set('Authorization' , helpers.makeAuthHeader(testUsers[0]))
          .send(newUser)
          .expect(201)

      });
    });
  });
/* [NOTE : not GET path for  user/:user_id]
  describe('GET api/user/:user_id', () =>{

    context('given there is content', ()=>{
      beforeEach('insert content', () =>{
        helpers.seedUsers(db,testUsers);
      });

      it('it should retrieve target', () =>{
        const target = 1 ;
        const expectedUser = testUsers.find(us=> us.id === target);

        return supertest(app)
          .get(`/api/user/${target}`)
          .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
          .expect(200,expectedUser);
      });
    });

      [NOTE: there is no get path for just users.. that is handled by /auth...]
    context('given an XSS attack article', ()=>{
     
      const testUser = helpers.makeUsersArray()[1];
      const {
        maliciousUser,
        expectedUser,
      } = helpers.makeMaliciousUser(testUser);

     
      beforeEach('insert malicious user', () =>{
        return helpers.seedMaliciousUser(
          db,
          testUser,
        )
      })

      it('it should remove the XSS  content', () =>{
        return supertest(app)
          .get(`/api/user/${maliciousUser.id}`)
          .set('Authorization', helpers.makeAuthHeader(testUser))
          .expect(200)
          .expect(res => {
            expect(res.body.user_name).to.eql(expectedUser.user_name);
            expect(res.body.irl_name).to.eql(expectedUser.irl_name);
          });
      });
    });
    
  });
  */
    describe('PATCH api/user/:user_id', () =>{

      context('given an id and patch info ', ()=>{

        beforeEach('insert content into database', () => {
           helpers.seedUsers(db,testUsers);
      })

        it('update the content , and send a 201', () =>{

        const idToUpdate = 3 ; 
        const updatedUser = {
            irl_name : 'update',
            user_name : 'updated',
            user_password : 'password', 
        }
        const expectedUser = {
            ...testUsers[idToUpdate - 1],
            ...updatedUser
        }
            return supertest(app)
                .patch(`/api/user/${idToUpdate}`)
                .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                .send(updatedUser)
                .expect(204)
        })
      })
  })
  describe('DELETE api/user/:user_id', () =>{
      context('given an valid target to delete it should', ()=>{

        beforeEach('insert content into database', () => {
          helpers.seedUsers(db,testUsers);
     })

        it('remove target content and ', () =>{
          const idToRemove = 1;
          const filteredUser = testUsers.filter(user => user.id !== idToRemove)

            const expectedUserArray = filteredUser.map(user => {
                return{
                    id : user.id,
                    user_name : user.user_name,
                    irl_name : user.irl_name,
                    password : user.user_password,
                    date_created : user.date_created,
                }
            })

            return supertest(app)
                .delete(`/api/user/${idToRemove}`)
                .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                .expect(204)
                .then(res => 
                  supertest(app)
                  .get('/api/user')
                  .expect(expectedUserArray)
                )
        })
      })
  })




});