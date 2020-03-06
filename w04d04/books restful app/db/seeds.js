const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/i-movie-db';
mongoose.connect(dbURI);

const User = require('../models/user');
const Book = require('../models/book');

User.collection.drop();
Book.collection.drop();

User
  .create([{
    username: 'raidendilan',
    email: 'raiden18@me.com',
    password: 'hello',
    passwordConfirmation: 'hello'
  }])
  .then((users) => {
    console.log(`${users.length} User(s) created!`);

    return Book
      .create([{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.'
      },{
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        description: 'Of Mice and Men is a novella written by author John Steinbeck. Published in 1937, it tells the story of George Milton and Lennie Small, two displaced migrant ranch workers, who move from place to place in California in search of new job opportunities during the Great Depression in the United States.'
      },{
        title: 'The Wolf of Wall Street',
        author: 'Jordan Belfort',
        description: 'The Wolf of Wall Street is a non-fiction memoir book by former stockbroker and trader Jordan Belfort. The text was initially published on September 25, 2007 by Bantam Books.'
      },{
        title: 'Django',
        author: 'Quentin Tarantino',
        description: 'For the first time in print, the Academy Award-winning screenplay of the blockbuster film DJANGO UNCHAINED, with scenes that didn\'t make the final cut, an introduction by a film scholar, and a foreword written by Quentin Tarantino.'
      }]);
  })
  .then((books) => {
    console.log(`${books.length} Book(s) created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
