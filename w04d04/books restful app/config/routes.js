const express = require('express');
const router  = express.Router();
const staticController = require('../controllers/static');
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registrations');
const booksController = require('../controllers/books');

const books = require('../controllers/books');

// SECURITY ROUTE
function secureRoute(req, res, next) {
  if(!req.session.isAuthenticated || !req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('Hold up', 'You must be logged in man.');
      res.redirect('/');
    });
  }

  next();
}

// A home route
router.get('/', (req, res) => res.render('static/index'));

// RESTful routes for the Book resource
// All URLS should contain /books
router.route('/books')
  .get(booksController.index)
  .post(secureRoute, booksController.create);

router.route('/books/new')
  .get(secureRoute, books.new);

router.route('/books/:id')
  .get(booksController.show)
  .put(secureRoute, booksController.update)
  .delete(secureRoute, booksController.delete);

router.route('/books/:id/edit')
  .get(secureRoute, booksController.edit);

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

module.exports = router;
