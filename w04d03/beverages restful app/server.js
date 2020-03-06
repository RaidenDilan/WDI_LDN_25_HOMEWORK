const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./config/routes');
const { port, env, dbURI } = require('./config/environment'); // Distructuring

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');

app.set('views', `${__dirname}/views`);

app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded());

// method-override
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // looks in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

if(env !== 'test') app.use(morgan('dev'));

app.use(routes);

app.listen(port, () => console.log(`Running on port: ${port}`));

module.exports = app;
