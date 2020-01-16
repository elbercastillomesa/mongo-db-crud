const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//BookSchema
const BookSchema = new Schema({
  _id : Schema.Types.ObjectId,
  title : String,
  pages : Number,
  editorial : String,
  theme: String,
  createdBy : Number,
  createdAt : { type: Date },
  updatedBy : Number,
  updatedAt : { type: Date, default: Date.now },
});

//AuthorSchema and Model
const AuthorSchema = new Schema({
  _id : Schema.Types.ObjectId,
  firstName : String,
  lastName : String,
  nationality : String,
  specialty : String,
  books : {
    [BookSchema]
  },
  createdBy : Number,
  createdAt : { type: Date },
  updatedBy : Number,
  updatedAt : { type: Date, default: Date.now },
});

const Provider = mongoose.model('providers', ProviderSchema);

module.exports = Provider;
