// DONE
const mongoose = require('mongoose');
// DONE
const beverageSchema = new mongoose.Schema({
  name: { type: String},
  type: { type: String},
  abv: { type: Number},
  origin: { type: String},
  image: { type: String }
});
// DONE
module.exports = mongoose.model('Beverage', beverageSchema);
