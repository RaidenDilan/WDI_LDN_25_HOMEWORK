const mongoose = require('mongoose');

// we don't need a seperate model for the commentSchema
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
// the time and date the coomment was created
  timestamps: true
});

// checks for if the user comment was created by the user and provide access to delete the comment if they wanted to
commentSchema.methods.ownedBy = function ownedBy(user) {
  return this.createdBy.id === user.id;
};

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  address: {
    line1: { type: String, required: true },
    line2: { type: String },
    line3: { type: String },
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    country: { type: String, required: true }
  },
  image1: { type: String, required: true },
  image2: { type: String },
  image3: { type: String },
  stars: { type: String, required: true },
  lat: { type: String },
  lng: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
