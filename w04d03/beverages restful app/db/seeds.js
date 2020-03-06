// DONE
const mongoose = require('mongoose');
// DONE
const Promise = require('bluebird');
// DONE
const env = process.env.NODE_ENV || 'development';
// DONE
mongoose.Promise = Promise;
// DONE
mongoose.connect(`mongodb://localhost/beverages-${env}`);
// DONE
const Beverage = require('../models/beverage');
// DONE
Beverage.create([{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
},{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
},{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
},{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
},{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
},{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
},{
  name: 'String',
  type: 'String',
  abv: 'String',
  origin: 'String',
  image: 'String'
}])
 // DONE
.then(records => console.log(`${records.length} beverage created.`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
