import express from 'express';

import authentication from './authentication';
import users from './users';
import cars from './cars'
import showroom from './showroom'
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  cars(router);
  showroom(router);
  return router;
};