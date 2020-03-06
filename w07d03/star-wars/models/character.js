const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true },
  lightsaber: { type: String, trim: true }
});

CharacterSchema.set('toJSON', {
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Character', CharacterSchema);
