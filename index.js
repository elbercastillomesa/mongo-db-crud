const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');

//Setup express app
const app = express();

//ES6 Promise
mongoose.Promise = global.Promise;
// Connection to Mongo DB
mongoose.connect(
  'mongodb://ecastillo:ecastillo1@ds135624.mlab.com:35624/evercheck-test-4',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.static('public'));
//JSON data
app.use(express.json());

//Initialize routes
app.use('/api',routes);

//Error handling
app.use(function(err, req, res, next){
  res.status(400).send( {error: err.message} )
});

//Liste for requests
app.listen(process.env.port || 4000, function(){
  console.log('test app listening');
});
