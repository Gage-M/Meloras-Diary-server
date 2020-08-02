const AuthService = {
  getUserWithUserName(db, user_name){
    return db('diary_users')
      .where({user_name})
      .first();
  },
  parseBasicToken(token){
    return Buffer 
      .from(token,'base64')
      .split(':');
  },
};

module.exports = AuthService ; 