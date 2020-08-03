const express = require('express');
const path = require('path');
const CharacterInfoService = require('./character-info-service');
const { serializeCharacter } = require('./character-info-service');
const requiresAuth = require('../middleware/basic-auth');
const logger = require('../e-logger');

const CharacterInfoRouter = express.Router();
const jsonMiddleware = express.json();

CharacterInfoRouter
  .route('/')
  .get( (req,res,next)=>{
    CharacterInfoService.getAllCharacters(
      req.app.get('db')
    )
      .then( char =>{
        res.json(char.map(serializeCharacter));
      });
  })
  .post( requiresAuth, jsonMiddleware, (req,res,next,)=> {
    const { newCharacter } = req.body ;
    const {
      character_name,
      race,
      background,
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws, } = newCharacter;
    
    const newChar = {
      character_name,
      race,
      background,
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws,
    };
    for(const [key, prop] of Object.entries(newChar)){
      if(!prop){
        logger.error(`${key} was missing from req.body`);
        return res.status(400).json({
          error: {
            message : `${key} seems to be missing from request body`
          }
        });
      }
    }

    newChar.player_id = req.user.id;



    CharacterInfoService.insertNewCharacter(req.app.get('db'), newChar)
      .then( char => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl + `/${char.id}`))
          .json(serializeCharacter(char));
      })
      .catch(next);
  });


CharacterInfoRouter
  .route('/:character_id')
  
  .all(checkIfCharacterExists)
  .get( (req,res,next)=>{
    res.json(serializeCharacter(res.char));
  })
  .patch((req,res,next) => {
    const {
      player_id,
      date_created,
      character_name,
      race,
      background,
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws
    } = req.body;

    const updateChar ={
      character_name,
      race,
      background,
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws
    };

    const numOfVal = Object.values(updateChar).filter(Boolean).length;
    if(!numOfVal){
      logger.error('now was inside the request body');
      return res.status(400).json({
        error: {
          message : 'there was nothing inside the request body that we could work with'
        }
      });
    }
    updateChar.player_id = player_id;
    updateChar.date_created = date_created; 
    CharacterInfoService.updateChar (
      req.app.get('db'),
      req.params.character_id,
      updateChar
    )
      .then( char =>{
        return res.status(204).end();
      })
      .catch(next);
  })
  .delete((req,res,next)=> {
    CharacterInfoService.deleteChar(
      req.app.get('db'),
      req.params.character_id
    )
      .then(char => {
        res.status(204).end();
      })
      .catch(next);
  });





async function checkIfCharacterExists(req,res,next){
  try{
    const char = await CharacterInfoService.getCharacterById(
      req.app.get('db'),
      req.params.character_id
    );
    if(!char){
      logger.error(`call to :character_id == ${req.params.character_id}`);
      return res.status(404).json(
        {error : {
          message : 'sorry but the id your trying to contact can\'t be reached'
        }}
      );
    }
    res.char = char;
    next();
  }catch(err){
    next(err);
  }
}
  
module.exports = CharacterInfoRouter;
