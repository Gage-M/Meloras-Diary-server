


const UserService = {
  getAllUsers(db) {
    return db
      .select('')
      .from('diary_users');
  },

  getByUserById(db,id){
    return db
      .from('diary_users AS user')
      .select(
        'user.id',
        'user.irl_name',
        'user.user_name',
        'user.date_created',
      )

      .where('user.id',id)
      .first();
  },
  serializeUser(users){
    
  },
  insertNewUser(db,newUser){
    return db
      .insert(newUser)
      .into('diary_users')
      .returning('*')
      .then();
  },



};

module.exports = UserService;