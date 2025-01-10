const mongoose = require('mongoose');

const GamingPCSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('GamingPC', GamingPCSchema);
