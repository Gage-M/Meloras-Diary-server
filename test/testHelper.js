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
      `SELECT setval('character_info_id_seq', ?)`,
      [characters[characters.length - 1 ].id]
    );
  });
}; 

const makeExpectedCharacter =( id ,characters)=>{
  return characters.find(character=> character.id === id);
};

const makeUsersArray = () => {
  return [
    {
      id: 1,
      irl_name: 'Test user 1',
      user_name: 'test-user-1',
      user_password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      irl_name: 'Test user 2',
      user_name: 'test-user-2',
      user_password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      irl_name: 'Test user 3',
      user_name: 'test-user-3',
      user_password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      irl_name: 'Test user 4',
      user_name: 'test-user-4',
      user_password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ];
};

const makeCharacterArray = () => {
  return [
    {
      id: 1 ,
      player_id : 3 ,
      date_created : '2029-01-22T16:28:32.615Z' ,
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
      date_created : '2029-01-22T16:28:32.615Z' ,
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
      date_created : '2029-01-22T16:28:32.615Z' ,
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
      date_created : '2029-01-22T16:28:32.615Z' ,
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
      date_created : '2029-01-22T16:28:32.615Z' ,
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

const makeCharacterFixtures = () => {
  const testUsers = makeUsersArray();
  const testCharacters = makeCharacterArray(testUsers);
  return { testUsers, testCharacters };
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
             character_info;
             `
    )
      .then(()=> 
        Promise.all([
          trx.raw(`ALTER SEQUENCE diary_users_id_seq minvalue 0 START WITH 1`),
          trx.raw(`ALTER SEQUENCE character_info_id_seq minvalue 0 START WITH 1`),
          trx.raw(`SELECT setval('diary_users_id_seq',0)`),
          trx.raw(`SELECT setval('character_info_id_seq',0)`),
        ])
      )
  );
};

const makeMaliciousCharacter = user => {
  const maliciousCharacter = {
    id: 911,
    player_id : user.id ,
    date_created : new Date() ,
    character_name : 'Naughty naughty very naughty <script>alert("xss");</script>' ,
    race : 'Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.',
    background : 't-pose town folk',
    alignment : 'Neutral',/*ENUM*/
    gender : 'Other', /*ENUM*/
    personality_traits : 'test 1',
    ideals : 'test 1',
    fears : 'test 1' ,
    notes : 'test 1',
  };

  const expectedCharacter = {
    id: 911,
    player_id : user.id ,
    date_created : new Date() ,
    character_name : 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    race : 'Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.',
    background : 't-pose town folk',
    alignment : 'Neutral',/*ENUM*/
    gender : 'Other', /*ENUM*/
    personality_traits : 'test 1',
    ideals : 'test 1',
    fears : 'test 1' ,
    notes : 'test 1',
  };
  
    

  return{
    maliciousCharacter,
    expectedCharacter
  };
};

const seedMaliciousCharacter = (db , user, character=[]) => {
  return seedUsers(db, [user])
    .then(()=> 
      db
        .into('character_info')
        .insert([character])
    );
};

const makeMaliciousUser =()=>{
  const maliciousUser = {
    id: 911 ,
    user_name : 'Naughty naughty very naughty <script>alert("xss");</script>' ,
    irl_name : 'Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.',
    password : 'Malicious',
    date_created : new Date ()
  };
  const expectedUser = {
    id: 911 ,
    user_name : 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    irl_name : 'Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.',
    password : 'Malicious',
    date_created : new Date ()

  };

  return {
    maliciousUser,
    expectedUser
  };
};

const seedMaliciousUser = (db, user) => {
  return seedUsers(db, [user]);
};

module.exports = {
  seedUsers,
  makeUsersArray,
  makeCharacterFixtures,
  makeCharacterArray,
  makeMaliciousCharacter,
  makeExpectedUserCharacter,
  makeAuthHeader,
  makeExpected,
  makeMaliciousUser,
  makeExpectedCharacter,
  clearTable,
  seedMaliciousUser,
  seedCharacterTable,
  seedMaliciousCharacter,
};