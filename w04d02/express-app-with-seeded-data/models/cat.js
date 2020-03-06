const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  scientificName: { type: String, required: true },
  origin: { type: String },
  solidColors: { type: String },
  image: { type: String },
  maleWeight: { type: String },
  femaleWeight: { type: String, required: true }
});

module.exports = mongoose.model('Cat', catSchema);
