const express = require('express');
const router = express.Router();

// Get records from providers collection
router.get('/providers', function(req, res){
  res.send( {type:'GET'} )
});

// Add a new record to providers collection
router.post('/providers', function(req, res){
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    date: req.body.date
  });
});

// Update a record from providers collection
router.put('/providers/:id', function(req, res){
  res.send( {type:'PUT'} )
});

// Delete a record from providers collection
router.get('/providers/:id', function(req, res){
  res.send( {type:'DELETE'} )
});

module.exports = router;
