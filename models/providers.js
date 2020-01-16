const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema and Model

const ProviderSchema = new Schema({
  _id : [Schema.Types.ObjectId],
  firstName : String,
  lastName : String,
  middleName : String,
  email : String,
  specialty : {
    _id : [Schema.Types.ObjectId],
    name : String,
    createdBy : Number,
    createdAt : { type: Date },
    updatedBy : Number,
    updatedAt : { type: Date, default: Date.now }
  },
  projectedStartDate : { type: Date },
  employerId : Number,
  providerType : String,
  staffStatus : String,
  assignedTo : Number,
  status : String,
  createdBy : Number,
  createdAt : { type: Date },
  updatedBy : Number,
  updatedAt : { type: Date, default: Date.now },
});

const Provider = mongoose.model('providers', ProviderSchema);

module.exports = Provider;
