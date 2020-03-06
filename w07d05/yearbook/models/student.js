const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  linkedIn: { type: String, require: true },
  gitHub: { type: String, require: true  },
  mostLikelyTo: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);
