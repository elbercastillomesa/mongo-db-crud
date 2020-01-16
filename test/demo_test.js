const mongoose = require('mongoose');
const mocha = require('mocha');
const assert = require('assert');
const Provider = require('../models/providers');

// Describe Tests
describe('Saving test', function(){

  //Create Tests
  it('Saves a provider in database', function(done){

    const event = new Date();
    const identity = new mongoose.Types.ObjectId();
    var provider = new Provider(
      {
        _id : identity,
        firstName : "Test_1",
        lastName : "Test_1",
        middleName : "None",
        email : "test_1@hotmail.com",
        specialty : {
          _id : identity,
          name : "Adolescent Medicine",
          createdBy : 3838,
          createdAt : event.toISOString(),
          updatedBy : 82768,
          updatedAt : event.toISOString()
        },
        projectedStartDate : event.toISOString(),
        employerId : 318,
        providerType : "MD",
        staffStatus : "ACTIVE",
        assignedTo : 66523,
        status : "READY_FOR_REVIEW",
        createdBy : 79030,
        createdAt : event.toISOString(),
        updatedBy : 16969,
        updatedAt : event.toISOString()
      }
    );

    provider.save().then( function(){
      assert(provider.isNew === false);
    }).then(done,done);
  });
});
