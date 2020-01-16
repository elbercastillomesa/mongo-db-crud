const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//BookSchema
const BookSchema = new Schema({
  title : String,
  pages : Number,
  editorial : String,
  theme: String,
  createdBy : Number,
  createdAt : { type: Date },
  updatedBy : Number,
  updatedAt : { type: Date, default: Date.now }
});

//AuthorSchema and Model
const AuthorSchema = new Schema({
  firstName : String,
  lastName : String,
  nationality : String,
  specialty : String,
  books : [BookSchema],
  createdBy : Number,
  createdAt : { type: Date },
  updatedBy : Number,
  updatedAt : { type: Date, default: Date.now }
});

const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;
