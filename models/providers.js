const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema and Model

const ProviderSchema = new Schema({
  name: String,
  weight: Number
});

const Provider = mongoose.model('providers', ProviderSchema);

module.exports = Provider;
