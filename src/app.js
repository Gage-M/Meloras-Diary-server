require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const UserRouter = require('./users/users-router');
const CharacterInfoRouter = require('./character-info/character-info-router');
// const apiTokenHandler = require('./auth/api-token-handler');


const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common' ;

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

// app.use(apiTokenHandler());

app.get( '/', (req,res) => {
//   throw new Error('Error makes computer fans go brrrr');
  res.status(200).send('this is not the endpoint you should try contacting');
});

app.use('/api/user', UserRouter);
app.use('/api/character', CharacterInfoRouter);

app.use(function errorHandler(error, req , res , next){/*eslint-disable-line*/
  let response;
  if ( NODE_ENV === 'production'){
    response = { error : {message : 'server error' } };
  }else{
    console.error(error);/*eslint-disable-line*/
    response = { message : error.message, error };
  }
  res.status(500).json(response).send();
});


module.exports = app;