const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const databaseURI = 'mongodb://localhost/seeding-data';

mongoose.connect(databaseURI);

const Cat = require('../models/cat');

const Dog = require('../models/dog');

Cat.collection.drop();

Dog.collection.drop();

// CAT CREATE
Cat
  .create([{
    breed: 'Main Coone',
    scientificName: 'Felis catus',
    origin: 'United States of America',
    solidColors: ['White', 'Black', 'Blue', 'Red', 'Cream'],
    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/08/maine-coon-cat-photography-robert-sijka-64-57ad8f2c0277c__880.jpg',
    maleWeight: '5.9-8.2 kg',
    femaleWeight: '3.6 to 5.4 kg'
  }])
  .then((cat) => {
    if(cat) console.log(`${cat.length} Cat created`);
    
// DOG CREATE
    return Dog.create([{
      breed: 'Tibetan Mastiff',
      origin: 'Tibet',
      colors: ['Black', 'Blue', 'Gray', 'Brown & Tan', 'Black & Tan', 'Red Gold', 'Brown'],
      image: 'http://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/07/d97d024c4773741b2e6549e2786c84d5.jpg',
      maleHeight: '66–76cm',
      femaleHieght: '61–71cm'
    }]);
  })
  .then((dog) => {
    if(dog) console.log(`${dog.length} Dog created`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
