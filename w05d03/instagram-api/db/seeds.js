// const mongoose = require('mongoose');
// const { dbURI } = require('../config/environment');
//
// mongoose.Promise = require('bluebird');
// mongoose.connect(dbURI);
//
// const Instagram = require('../models/instagrams');
// const User = require('../models/user');
// 
// Instagram.collection.drop();
// User.collection.drop();
//
// User
//   .create([{
//     firstName: 'Raiden',
//     lastName: 'Dilan',
//     username: 'raidendilan',
//     email: 'raiden18@yoyo.com',
//     password: 'password',
//     passwordConfirmation: 'password'
//   }])
//   .then((users) => {
//     console.log(`${users.length} Users created`);
//     return Instagram
//       .create([{
//         name: 'Oblix',
//         phone: '020 7268 6700',
//         email: 'www.oblixrestaurant.com',
//         image1: 'http://www.fashionbite.co.uk/wp-content/uploads/2013/01/shard.jpg',
//         image2: 'https://www.oblixrestaurant.com/files/9313/8468/9051/Hallway_shot_IMG_1033.jpg',
//         image3: 'http://cdn3.gcprive.co.uk/wp-content/uploads/2013/05/oblix-at-the-shard-01.jpg',
//         description: 'We are all in this together, join the party, protect the planet, be kind, face your fears, travel, love your family & friends and dream BIG!',
//         createdBy: users[0]
//       }]);
//   })
//   .then((instagrams) => console.log(`${instagrams.length} Instagram created`))
//   .catch((err) => console.log(err))
//   .finally(() => mongoose.connection.close());
