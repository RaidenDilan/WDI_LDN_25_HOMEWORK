// REQUIRE MODULES
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// const port = process.env.PORT || 3000;
const routes = require('./config/routes');
const session = require('express-session');
const User = require('./models/user');
const flash = require('express-flash');

// const dbURI = 'mongodb://localhost/restful-routing';
const { port, dbURI } = require('./config/environment');

// SETUP DATABASE
mongoose.connect(dbURI);

// SETUP EXPRESS UP
const app = express();
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// COOCKIES
app.use(session({
  secret: process.env.SESSION_SECRET || 'shh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));

// IMPLEMENT FLASH AFTER THE SESSION
app.use(flash());

// AUTHENTICATION & LOCA & USER ID
app.use((req, res, next) => {
  if(!req.session.isAuthenticated) return next();

  User
    .findById(req.session.userId)
    .then((user) => {
      if(!user) {
        res.redirect('/');
      }

      req.session.userId = user.id;

      res.locals.user = user;
      res.locals.isAuthenticated = true;

      next();
    });
});

app.use('/', routes);

app.listen(port, () => console.log(`Express is listening to port ${port}`));
