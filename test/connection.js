const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

// Fix DB connection before test run
before(function(done){
  // Connection to Mongo DB
  mongoose.connect(
    'mongodb://ecastillo:ecastillo1@ds135624.mlab.com:35624/evercheck-test-4',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  mongoose.connection.once( 'open', function(){
    console.log('Connection Successfull');
    done();
  }).on('error', function(error){
    console.log('Connection Error: ',error);
  })
});

// Drop Providers with 'Test_1' from Collection before each test
beforeEach( function(done){
  //Drop Collection
  mongoose.connection.collections.providers.deleteMany( {"lastName": "Test_1"}, function(){
    done();
  })
})
