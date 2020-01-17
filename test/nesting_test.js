const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe test
describe('Nesting records', function(){

  const event = new Date();

  //Create test
  it('Creates an author with sub-documents', function(done){

    var pat = new Author({
      firstName : 'Henry',
      lastName : 'Gray',
      nationality : 'UK',
      specialty : 'Anatomy',
      books : [{
        title : 'Anatomy of the Human Body, 20th Ed.',
        pages : 1396,
        editorial : 'Bartleby',
        theme: 'Anatomy',
        createdBy : 12345,
        createdAt : event.toISOString(),
        updatedBy : 12345,
        updatedAt : event.toISOString()
      }],
      createdBy : 12345,
      createdAt : event.toISOString(),
      updatedBy : 12345,
      updatedAt : event.toISOString(),
    });

    pat.save().then(function(){
      Author.findOne( {firstName:'Henry'} ).then( function(record){
        assert(record.books.length === 1);
      });
    }).then(done,done);
  });

  //Add a book to existing Author
  it('Add a book to existing Author', function(done) {
    Author.findOne( {firstName:'Henry'} ).then( function(record){

      //Add the book to the array
      record.books.push({
        title : 'Functional Neuroanatomy of Man, 1975',
        pages : 448,
        editorial : 'Saunders',
        theme: 'Anatomy',
        createdBy : 12345,
        createdAt : event.toISOString(),
        updatedBy : 12345,
        updatedAt : event.toISOString()
      });

      record.save().then( function(){
        Author.findOne( {firstName:'Henry'} ).then( function(result){
          assert(record.books.length === 2);
        });
      }).then(done,done);
    });
  });
});
