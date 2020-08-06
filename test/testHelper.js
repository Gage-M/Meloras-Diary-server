
const seedUsers = ( ) => {};

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
        id: ,
        player_id : ,
        date_created : ,
        character_name :'' ,
        race : '',
        background : '',
        alignment : '',/*ENUM*/
        gender : '', /*ENUM*/

    },
    {
        id: ,
        player_id : ,
        date_created : ,
        character_name :'' ,
        race : '',
        background : '',
        alignment : '',/*ENUM*/
        gender : '', /*ENUM*/

    },
    {
        id: ,
        player_id : ,
        date_created : ,
        character_name :'' ,
        race : '',
        background : '',
        alignment : '',/*ENUM*/
        gender : '', /*ENUM*/

    },
    {
        id: ,
        player_id : ,
        date_created : ,
        character_name :'' ,
        race : '',
        background : '',
        alignment : '',/*ENUM*/
        gender : '', /*ENUM*/

    },
    {
        id: ,
        player_id : ,
        date_created : ,
        character_name :'' ,
        race : '',
        background : '',
        alignment : '',/*ENUM*/
        gender : '', /*ENUM*/

    }
  ];
};

const makeExpectedCharacter = () => {};

const makeAuthHeader = user => {};

const makeExpected = () => {};

const clearTable = () => {};

const seedCharacterTable = () => {}; 

const seedMaliciousCharacter = () => {};


module.exports = {
  seedUsers,
  makeUsersArray,
  makeCharacterArray,
  makeExpectedCharacter,
  makeAuthHeader,
  makeExpected,
  clearTable,
  seedCharacterTable,
  seedMaliciousCharacter,
};