/* eslint-disable quotes */

const seedUsers = (db, users ) => {
  return db.into('diary_users').insert(users)
    .then(()=>
      db.raw(
        'SELECT setval(\'diary_users_id_seq\', ?)',
        [users[users.length - 1 ].id],
      )
    );
};

const seedCharacterTable = (db, users, characters=[]) => {
  return db.transaction(async trx =>{
    await seedUsers(trx,users);
    await trx.into('character_info').insert(characters);

    await trx.raw(
      `SELECT setval('diary_users_id_swq', ?)`,
      [characters[characters.length - 1 ].id]
    );
  });
}; 

const makeUsersArray = () => {
  return [
    {
      id: 1,
      irl_name: 'Test user 1',
      user_name: 'test-user-1',
      user_password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 2,
      irl_name: 'Test user 2',
      user_name: 'test-user-2',
      user_password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 3,
      irl_name: 'Test user 3',
      user_name: 'test-user-3',
      user_password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 4,
      irl_name: 'Test user 4',
      user_name: 'test-user-4',
      user_password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
  ];
};

const makeCharacterFixtures = () => {
  const testUsers = makeUsersArray();
  const testCharacters = makeCharacterArray(testUsers);
  return { testUsers, testCharacters };
};

const makeCharacterArray = () => {
  return [
    {
      id: 1 ,
      player_id : 3 ,
      date_created : new Date('2029-01-22T16:28:32.615Z') ,
      character_name :'test 1' ,
      race : 'human',
      background : 't-pose town folk',
      alignment : 'Neutral',/*ENUM*/
      gender : 'Other', /*ENUM*/
      personality_traits : 'test 1',
      ideals : 'test 1',
      fears : 'test 1' ,
      notes : 'test 1',

    },
    {
      id: 2 ,
      player_id : 1 ,
      date_created : new Date('2029-01-22T16:28:32.615Z') ,
      character_name :' test 2' ,
      race : 'human',
      background : 't-pose town folk',
      alignment : 'Neutral',/*ENUM*/
      gender : 'Other', /*ENUM*/
      personality_traits : 'test 2',
      ideals : 'test 22',
      fears : 'test 22' ,
      notes : 'test 22',

    },
    {
      id: 3 ,
      player_id : 1 ,
      date_created : new Date('2029-01-22T16:28:32.615Z') ,
      character_name :'test 3 ' ,
      race : 'duck',
      background : 't-pose town folk',
      alignment : 'Neutral',/*ENUM*/
      gender : 'Other', /*ENUM*/
      personality_traits : 'test 333',
      ideals : 'test 333',
      fears : 'test 333' ,
      notes : 'test 333',

    },
    {
      id: 4 ,
      player_id : 2 ,
      date_created : new Date('2029-01-22T16:28:32.615Z') ,
      character_name :' test 4' ,
      race : 'human',
      background : 't-pose town folk',
      alignment : 'Neutral',/*ENUM*/
      gender : 'Other', /*ENUM*/
      personality_traits : 'test 4444',
      ideals : 'test 4444',
      fears : 'test 4444' ,
      notes : 'test 4444',

    },
    {
      id:  5 ,
      player_id : 3 ,
      date_created : new Date('2029-01-22T16:28:32.615Z') ,
      character_name :' test 5' ,
      race : 'human',
      background : 't-pose town folk',
      alignment : 'Neutral',/*ENUM*/
      gender : 'Other', /*ENUM*/
      personality_traits : 'test 55555',
      ideals : 'test 55555',
      fears : 'test 55555' ,
      notes : 'test 55555',

    }
  ];
};

const makeExpectedUserCharacter = () => {


};

const makeAuthHeader = user => {
  const token = Buffer.from(`${user.user_name}:${user.user_password}`).toString('base64');
  return `Basic ${token}`;
};

const makeExpected = () => {};

const clearTable = (db) => {
  return db.transaction(trx => 
    trx.raw(
      `TRUNCATE
             diary_users,
             character_info
             `
    )
      .then(()=> 
        Promise.all([
          trx.raw(`ALTER SEQUENCE diary_users minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE character_info minvalue 0 START WITH 1`),
          trx.raw(`SELECT setval('diary_users',0)`),
          trx.raw(`SELECT setval('character_info',0)`)
        ])
      )
  );
};



const seedMaliciousCharacter = () => {};


module.exports = {
  seedUsers,
  makeUsersArray,
  makeCharacterFixtures,
  makeCharacterArray,
  makeExpectedUserCharacter,
  makeAuthHeader,
  makeExpected,
  clearTable,
  seedCharacterTable,
  seedMaliciousCharacter,
};