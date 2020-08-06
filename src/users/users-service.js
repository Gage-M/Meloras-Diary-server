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

  getAllUsersChar(db, userId){
    return db 
      .from('character_info AS char')
      .select(
        'char.*',
        db.raw(
          `json_strip_nulls(
                json_build_object(
                  'user_name' , dsers.user_name,
                  'date_created' , dsers.date_created
                )
            ) AS player_info`
        ),
      )
      .where('char.player_id', userId)
      .leftJoin('diary_users AS dsers',
        'char.player_id',
        'dsers.id'
      )
      .groupBy('char.id', 'dsers.id');
  },

  serializeCharacterOfUser(char){
    const { player_info } = char ; 
    console.log('char @ player_info is ===', player_info.user_name);
    return{
      id:char.id ,
      player_id: char.id ,
      date_created: new Date(char.date_created) ,
      character_name: xss(char.character_name) ,
      race: xss(char.race) ,
      background: xss(char.background) ,
      alignment: xss(char.alignment) ,
      gender: xss(char.gender), 
      personality_traits: xss(char.personality_traits) ,
      ideals: xss(char.ideals),
      fears:xss( char.fears),
      notes: xss(char.notes),
      player_info : {
        user_name : xss(player_info.user_name),
        date_created : new Date(player_info.date_created)
      }
    };
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