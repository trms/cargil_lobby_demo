module.exports = function(app) {
  var express = require('express');
  var mapsRouter = express.Router();

  var maps = [
    {'id':1,"location":"119",'image':'http://www.fillmurray.com/101/101','kiosk':1},
    {'id':2,"location":"118",'image':'http://www.fillmurray.com/102/102','kiosk':1},
    {'id':3,"location":"117",'image':'http://www.fillmurray.com/103/103','kiosk':1},
    {'id':4,"location":"116",'image':'http://www.fillmurray.com/104/104','kiosk':1},
    {'id':5,"location":"115",'image':'http://www.fillmurray.com/105/105','kiosk':1},
  ];

  mapsRouter.get('/', function(req, res) {
    res.send({
      'maps': maps
    });
  });

  mapsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  mapsRouter.get('/:id', function(req, res) {
    res.send({
      'maps': maps
    });
  });

  mapsRouter.put('/:id', function(req, res) {
    res.send({
      'maps': {
        id: req.params.id
      }
    });
  });

  mapsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/maps', mapsRouter);
};
