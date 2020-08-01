const express = require('express');
const UserService = require('./users-service');
const path = require('path');
const { serializeUser, serializeCharacterOfUser } = require('./users-service');
const logger = require('../e-logger');


const UserRouter = express.Router();

UserRouter
  .route('/')
  .get( (req,res,next) => {
    UserService.getAllUsers(
      req.app.get('db')
    )
      .then(items => {
        res.json(items.map(serializeUser));
      });
  })
  .post( (req,res,next) => {
    const {user_name, irl_name, user_password } = req.body;
    const  newUser = {user_name, irl_name, user_password };

    for (let [key, prop] of Object.entries(newUser)){
      if(!prop){
        logger.error(`${key} was missing from the POST body`);
        return res.json.status(400).json({error:{message : `please make sure that ${key} field is filled out`}});
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


  
  } );
UserRouter
  .route('/:user_id')
  .all(checkIfUserExists)
  .get((req,res,next)=>{
    res.json(serializeUser(res.user));
  })
  .patch((req,res,next)=>{
    const {user_name, user_password, irl_name, date_created} = req.body;
    const updateInfo = {user_name, user_password, irl_name};

    const numberOfValues = Object.values(updateInfo).filter(Boolean).length;
    if(!numberOfValues){
      logger.error('nothing was changed therefor not updated needed');
      return res.status(400).json({
        error: {
          message : 'there was nothing sent so update can\'t be processed'
        }
      });
    }
    updateInfo.date_created = date_created; 
    UserService.updateUser(
      req.app.get('db'),
      req.params.user_id,
      updateInfo
    )
      .then(user =>{
        return res.status(204).end();
      })
      .catch(next);
  })
  .delete((req,res,next)=>{
    UserService.deleteUser(
      req.app.get('db'),
      req.params.user_id
    )
      .then(()=>{
        res.status(204).end();
      })
      .catch();
  });

UserRouter
  .route('/:user_id/character')
  .get((req,res,next)=>{
    UserService.getAllUsersChar(
      req.app.get('db'),
      req.params.user_id
    )
      .then(char => res.json(char.map(a => serializeCharacterOfUser(a))))
      .catch(next);
  });



async function checkIfUserExists(req,res,next){
  try{
    const user = await UserService.getByUserById(
      req.app.get('db'),
      req.params.user_id
    );
    if(!user){
      logger.error(`call to :user_id == ${req.params.user_id}`);
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
  