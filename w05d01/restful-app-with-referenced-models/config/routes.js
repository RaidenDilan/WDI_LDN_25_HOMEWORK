const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const restaurants = require('../controllers/restaurants');


router.get('/', (req, res) => res.render('statics/index'));

router.route('/restaurants')
  .get(restaurants.index)
  .post(secureRoute, restaurants.create);

router.route('/restaurants/new')
  .get(secureRoute, restaurants.new);

router.route('/restaurants/:id')
  .get(restaurants.show)
  .put(secureRoute, restaurants.update)
  .delete(secureRoute, restaurants.delete);

router.route('/restaurants/:id/edit')
  .get(secureRoute, restaurants.edit);

router.route('/restaurants/:id/comments')
  .post(secureRoute, restaurants.createComment);

router.route('/restaurants/:id/comments/:commentId')
  .delete(secureRoute, restaurants.deleteComment);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
