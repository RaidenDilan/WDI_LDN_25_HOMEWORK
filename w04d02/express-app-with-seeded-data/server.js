const express = require('express');

const morgan  = require('morgan');

const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const databaseURI = 'mongodb://localhost/seeding-data';

mongoose.connect(databaseURI);

const Cat = require('./models/cat');

const Dog = require('./models/dog');

const app = express();

app.set('view engine', 'ejs');

app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));

app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cat', (req, res) => {
  Cat
   .find()
   .sort()
   .exec()
   .then((records) => {
     res.render('cat', { records });
   });
});

app.get('/dog', (req, res) => {
  Dog
   .find()
   .exec()
   .then((records) => {
     res.render('dog', { records });
   });
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(3000, () => console.log('Express is listening to port 3000'));
