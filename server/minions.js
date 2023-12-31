const minionsRouter = require('express').Router();

module.exports = minionsRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');


  minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
      req.minion = minion;
      next();
    } else {
      res.status(404).send();
    }
  });

  // GET /api/minions to get an array of all minions.
  minionsRouter.get('/', (req, res, next) => {
    console.log("in minios.js, minions router");
    const allMinions = getAllFromDatabase('minions');
    // console.log(allMinions);
    res.send(allMinions);
  });

  // GET a minion by id
  minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
  });

