const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Property = require('../models/property');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

Property.collection.drop();

Property
  .create([{
    name: 'Cornwall Gardens',
    address: '200 Brompton Road',
    postcode: 'SW7',
    bedrooms: '1',
    bathrooms: '2',
    askingPrice: 3000000,
    floorArea: 1250,
    dateAvailable: '2017-03-17',
    image: 'https://lid.zoocdn.com/645/430/75d5c3b3625072f594fbbcf4661e389562503a57.jpg'
  }, {
    name: 'Sloane Court West',
    address: '178 Kings Road',
    postcode: 'SW3',
    bedrooms: '3',
    bathrooms: '4',
    askingPrice: 2000000,
    floorArea: 971,
    dateAvailable: '2017-04-20',
    image: 'https://lid.zoocdn.com/645/430/9719953a8b6578cad59c208010ec96a827fc2d78.jpg'
  }, {
    name: '101 Sloane Street',
    address: 'Chelsea',
    postcode: 'SW7',
    bedrooms: '2',
    bathrooms: '3',
    askingPrice: 1000000,
    floorArea: 703,
    dateAvailable: '2017-05-22',
    image: 'http://mr2.homeflow.co.uk/files/photo/image/12958/4137/815x530/SOU160141_07.jpg'
  }])
  .then((properties) => console.log(`${properties.length} Properties created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
