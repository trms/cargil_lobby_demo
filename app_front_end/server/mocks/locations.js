module.exports = function(app) {
  var express = require('express');
  var locationsRouter = express.Router();

  var locations = [
    {id:1, location:'119'},
    {id:2, location:'118'},
    {id:3, location:'117'},
    {id:4, location:'116'},
    {id:5, location:'115'},
  ];

  locationsRouter.get('/', function(req, res) {
    res.send({
      'locations': locations
    });
  });

  locationsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  locationsRouter.get('/:id', function(req, res) {
    res.send({
      'locations': {
        id: req.params.id
      }
    });
  });

  locationsRouter.put('/:id', function(req, res) {
    res.send({
      'locations': {
        id: req.params.id
      }
    });
  });

  locationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/locations', locationsRouter);
};
