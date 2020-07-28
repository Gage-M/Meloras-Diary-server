const express = require('express');
const UserService = require('./users-service');

const UserRouter = express.Router();

UserRouter
  .route('/')
  .get()
  .post()

  .route('/:user_id')
  .get()
  .patch()
  .delete();

module.exports = UserRouter;
  