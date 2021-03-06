const mongoose = require('mongoose');
const assert = require('assert');
const Provider = require('../models/providers');

// Describe Tests
describe('Updating Record', function(){

  var provider;

  beforeEach(function(done){

        const event = new Date();
        const identity = new mongoose.Types.ObjectId();
        provider = new Provider(
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
  })

  //Remove one Record by firstName
  it('Find One Record in Collection by firstName and Update It', function(done){

    Provider.findOneAndUpdate(
      {firstName:"Test_1"},
      {firstName:"Test_Updated_1"},
      {useFindAndModify: false}
    ).then(function(){

      Provider.findOne({_id:provider._id}).then(function(result){
        assert(result.firstName === "Test_Updated_1");
      });

    }).then(done,done);
  });

  //Update Operators (Example "employerId")
  it('Increments the employerId by 5 for all records', function(done){

    Provider.updateMany( {}, { $inc: {employerId:5} }).then(function(){

      Provider.findOne({_id:provider._id}).then(function(result){
        assert(result.employerId === (provider.employerId+5) );
      });

    }).then(done,done);
  });

});
