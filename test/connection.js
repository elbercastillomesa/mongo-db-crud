const mongoose = require('mongoose');

// Connection to Mongo DB
mongoose.connect('mongodb://ecastillo:ecastillo1@ds135624.mlab.com:35624/evercheck-test-4');

mongoose.connection.once( 'open', function(){
  console.log('Connection Successfull')
}).on('error', function(error){
  console.log('Connection Error: ',error);
})
