module.exports = function(app) {
  var express = require('express');
  var listingsRouter = express.Router();

  var listings = [
        {'id':1,'map':1,'firstName':'Woody','lastName':'Wiedenhoeft','title':'Executive Director','location':'119','image':'http://www.fillmurray.com/200/350'},
        {'id':2,'map':2,'firstName':'Tina','lastName':'Hafeman','title':'Associate Executive Director','location':'117','image':'http://www.fillmurray.com/220/350'},
        {'id':3,'map':3,'firstName':'Áine','lastName':'Calgaro','title':'Communications & Membership Coordinator','location':'115','image':'http://www.fillmurray.com/215/350'},
        {'id':4,'map':4,'firstName':'Jeanne','lastName':'Deimund','title':'Member Services & Professional Development Coordinator','location':'118','image':''},
      ];

  listingsRouter.get('/', function(req, res) {
    res.send({
      'listings': listings
    });
  });

  listingsRouter.post('/', function(req, res) {
    // res.status(201).end();
    res.send({
      'listings': {
        id: 99
      }
    });
  });

  listingsRouter.get('/:id', function(req, res) {
  
    res.send({
      'listings': {
        id: req.params.id
      }
    });
  });

  listingsRouter.put('/:id', function(req, res) {
    res.send({
      'listings': {
        id: req.params.id
      }
    });
  });

  listingsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listings', listingsRouter);
};
