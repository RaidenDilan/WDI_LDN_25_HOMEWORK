module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NOD_ENV || 'development',
  dbURI: process.env.MONGODB_URI || `mongodb://localhost/beverages-${this.env}`
};
