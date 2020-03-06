// REQUIRE MODULES
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const routes = require('./config/routes');
const authentication = require('./lib/authUser');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');
const secureRoute = require('./lib/secureRoute');
const { port, env, dbURI } = require('./config/environment');

// SETUP EXPRESS APP
const app = express();
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// SETUP DATABASE
mongoose.connect(dbURI);

// MIDDLEWARE
if(env !== 'test') app.use(morgan('dev'));

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

// METHOD OVVERIDE
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// SESSION
app.use(session({
  secret: process.env.SESSION_SECRET || 'my great secret',
  resave: false,
  saveUninitialized: false
}));

// FLASH
app.use(flash());

// THROWING AN ERROR FUNCTION
app.use(customResponses);

// AUTHENTICATION
app.use(authentication);

// ROUTES
app.use(routes);

// SECURE ROUTE
app.use(secureRoute);

// CATCHING ERRORS
app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
