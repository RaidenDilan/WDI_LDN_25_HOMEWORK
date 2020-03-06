const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  image: { type: String },
  password: { type: String },
  githubId: { type: Number },
  description: { type: String }
});

userSchema
.virtual('imageSRC')
.get(function getImageSRC() {
  if (this.image.match('http')) return this.image;
  // if (this.image.match(/^http/)) return this.image;
  if(!this.image) return null; // could put a placeholder image here.
  return `https://s3-eu-west-1.amazonaws.com/wdi-ldn/${this.image}`;
  // return `uploads/${this.image}`;
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// lifecycle hook - mongoose middleware
userSchema.pre('validate', function checkPassword(next) {
  if(this._passwordConfirmation && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8)); // 8 - how many times the password will be encrypted
  }
  next();
});

// validating password - method
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
