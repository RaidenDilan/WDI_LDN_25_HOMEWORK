module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  dbURI: process.env.MONGODB_URI || `mongodb://localhost/restful-express-app-with-authentication-${this.env}`
}
