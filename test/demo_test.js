const mocha = require('mocha');
const assert = require('assert');
const Provider = require('../models/providers');

// Describe Tests
describe('Saving test', function(){

  //Create Tests
  it('save a provider in database', function(){

    var provider = new Provider({

    });

    provider.save()

  });
});
