const router = require('express').Router();
const staticsController = require('../controllers/statics');
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registrations');
const clubsController = require('../controllers/clubs');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('statics/index')); //???????????????

router.route('/')
  .get(staticsController.index);

router.route('/clubs')
  .get(clubsController.index)
  .post(secureRoute, clubsController.create);

router.route('/clubs/new')
  .get(secureRoute, clubsController.new);

router.route('/clubs/:id')
  .get(clubsController.show)
  .put(secureRoute, clubsController.update)
  .delete(secureRoute, clubsController.delete);

router.route('/clubs/:id/edit')
  .get(secureRoute, clubsController.edit);

// registrations
router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

// catch all 404 error page
router.all('*', (req, res) => res.notFound());

module.exports = router;
