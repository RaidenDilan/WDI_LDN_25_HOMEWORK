const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Restaurant = require('../models/restaurant');
const User = require('../models/user');

Restaurant.collection.drop();
User.collection.drop();

User
  .create([{
    firstName: 'Raiden',
    lastName: 'Dilan',
    username: 'raidendilan',
    email: 'raiden18@me.com',
    password: 'password',
    passwordConfirmation: 'password'
  }, {
    firstName: 'Mike',
    lastName: 'Hayden',
    username: 'mickyginger',
    email: 'mike.hayden@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Restaurant
      .create([{
        name: 'Oblix',
        phone: '020 7268 6700',
        website: 'www.oblixrestaurant.com',
        address: {
          line1: 'Level 32, The Shard',
          line2: '31 St.',
          line3: 'Thomas Street',
          city: 'London',
          postcode: 'SE1 9RY',
          country: 'UK'
        },
        image1: 'http://www.fashionbite.co.uk/wp-content/uploads/2013/01/shard.jpg',
        image2: 'https://www.oblixrestaurant.com/files/9313/8468/9051/Hallway_shot_IMG_1033.jpg',
        image3: 'http://cdn3.gcprive.co.uk/wp-content/uploads/2013/05/oblix-at-the-shard-01.jpg',
        lat: '51.5010598',
        lng: '-0.0823818',
        stars: 4,
        createdBy: users[0]
      },{
        name: 'Lima',
        phone: '020 7240 5778',
        website: 'www.limalondongroup.com',
        address: {
          line1: '14 Garrick St',
          line2: 'Covent Garden',
          city: 'London',
          postcode: 'WC2E 9BJ',
          country: 'UK'
        },
        image1: 'http://www.townfish.com/wp-content/uploads/2016/10/rsz_lima_restaurant.jpg',
        image2: 'http://2.bp.blogspot.com/-9eEjq62xJPY/Ujx9ECOdCjI/AAAAAAAAO3A/TciqpOhcWDY/s1600/Interior3+RESIZED.JPG',
        image3: 'http://3.bp.blogspot.com/-aLeK8bLHhMs/VAN2wxA1ScI/AAAAAAAAYbY/PyKK8gZT8Ls/s1600/_MG_0640.JPG',
        lat: '51.5177516',
        lng: '-0.1344076',
        stars: 4,
        createdBy: users[0]
      }]);
  })
  .then((restaurants) => console.log(`${restaurants.length} restaurants created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
