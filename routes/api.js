const express = require('express');
const router = express.Router();
const Provider = require('../models/providers');

// Get records from providers collection
router.get('/providers', function(req, res, next){
  Provider.find({}).then(function(providers){
    res.send(providers);
  })
});

// Add a new record to providers collection
router.post('/providers', function(req, res, next){
  try{
    Provider.create(req.body).then( function(provider){
      res.send(provider);
    }).catch(next);
  } catch(err) {
    next(err);
  }
});

// Update a record from providers collection
router.put('/providers/:id', function(req, res, next){
  Provider.findByIdAndUpdate(
    {_id:req.params.id},
    req.body,
    {useFindAndModify: false}
  ).then(
    function(){
      Provider.findOne( {_id:req.params.id} ).then( function(provider){
        res.send(provider);
      });
    });
});

// Delete a record from providers collection
router.delete('/providers/:id', function(req, res, next){

  Provider.findByIdAndRemove( {_id: req.params.id}, {useFindAndModify: false} ).then(
    function(provider){
      res.send(provider);
    });
});

module.exports = router;
