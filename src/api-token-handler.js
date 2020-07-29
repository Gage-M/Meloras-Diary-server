const { API_TOKEN } = require('./config');
const logger = require('./e-logger');

module.exports = function apiTokenAuth(req,res,next){
  const token = req.get('Authorization');
  if(!token || token.split(' ')[1] !== API_TOKEN){
    logger.error('missing API_TOKEN');
    res.status(401).json({error:'that\'s not allowed'} );
  }
  next();
};