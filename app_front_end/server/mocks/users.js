module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var users = [
    {id:1,name:'Seth Phillips',email:'seth.phillips@trms.com'},
    {id:2,name:'admin',email:'admin'},
  ];

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': users
    });
  });

  usersRouter.post('/', function(req, res) {
    // res.status(201).end();
    res.send({
      'users': {
        id: 99
      }
    });
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
