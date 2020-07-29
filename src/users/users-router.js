const express = require('express');
const UserService = require('./users-service');
const path = require('path');
const { serializeUser } = require('./users-service');

// UserService.serializeUser();

const UserRouter = express.Router();

UserRouter
  .route('/')
  .get((req,res,next)=>{
    UserService(
      req.app.get('db')
    )
      .then(items => {
        res.json(items.map(serializeUser));
      });
  })
  .post((req,res,next)=>{
    const {user_name, irl_name, user_password } = req.body;
    const  newUser = {user_name, irl_name, user_password };

    for (let [key, prop] of Object.entries(newUser)){
      if(!prop){
        res.json.status(400).json({error:{message : `please make sure that ${key} field is filled out`}});
      }
    }
    UserService.insertNewUser(
      req.app.get('db'),
      newUser
    )
      .then(u =>{
        res.status(201)
          .location(path.posix.join(req.originalUrl, `/${u.id}`))
          .json(serializeUser(u));
      });


  
  } )

  .route('/:user_id')
  .all(checkIfUserExists)
  .get((req,res,next)=>{

  })
  .patch((req,res,next)=>{

  })
  .delete((req,res,next)=>{

  });

/*
  .route('/:user_id/:char_id')
  .get((req,res,next)=>{

  })
  .patch((req,res,next)=>{

  })
  .delete((req,res,next)=>{

  })
  
*/
async function checkIfUserExists(req,res,next){
  try{
    const user = await UserService.getByUserById(
      req.app.get('db'),
      req.params.user_id
    );
    if(!user){
      return res.status(404).json(
        {error : {
          message : 'sorry but the id your trying tod contact can\'t be reached'
        }}
      );
    }
    res.user = user;
    next();
  }catch(err){
    next(err);
  }
}

module.exports = UserRouter;
  