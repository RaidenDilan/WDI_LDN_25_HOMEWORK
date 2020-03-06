const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  origin: { type: String, required: true },
  colors: { type: String },
  image: { type: String },
  maleHeight: { type: String },
  femaleHieght: { type: String, required: true }
});

module.exports = mongoose.model('Dog', dogSchema);
