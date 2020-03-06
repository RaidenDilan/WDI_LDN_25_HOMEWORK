const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  address: { type: String },
  website: { type: String },
  description: { type: String },
  lat: { type: String },
  lng: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String }
});

module.exports = mongoose.model('Club', clubSchema);
