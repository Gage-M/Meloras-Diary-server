const  xss  = require('xss');



const UserService = {
  getAllUsers(db) {
    return db
      .select()
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

      .where({id})
      .first();
  },
  serializeUser(user){
    return {
      id : user.id,
      irl_name : xss(user.irl_name),
      user_name : xss(user.user_name),
      date_created : new Date(user.date_created),
      password : xss(user.user_password)
    };
  },
  insertNewUser(db,newUser){
    return db
      .insert(newUser)
      .into('diary_users')
      .returning('*')
      .then();
  },
  updateUser(db, id, UpdatedContent){
    return db('diary_users')
      .where({id})
      .update(UpdatedContent);
  },
  deleteUser(db,id){
    return db('diary_users')
      .where({id})
      .delete();
  }



};

module.exports = UserService;