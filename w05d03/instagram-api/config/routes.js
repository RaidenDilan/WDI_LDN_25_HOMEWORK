const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const oauth = require('../controllers/oauth');
const upload = require('../lib/upload');
const instagrams = require('../controllers/instagrams');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/users')
  .get(registrations.users);

router.route('/feed')
  .get(secureRoute, registrations.feed);

router.route('/profile')
  .get(secureRoute, registrations.show);

router.route('/profile')
  .delete(secureRoute, registrations.delete);

router.route('/instagrams/:id')
  .get(instagrams.edit)
  .put(secureRoute, instagrams.update)
  .delete(secureRoute, instagrams.delete);

router.route('/instagrams/:id/edit')
  .get(secureRoute, instagrams.edit);

router.route('/instagrams/:id/comments/:commentId')
  .delete(secureRoute, instagrams.deleteComment);

router.route('/register')
  .get(registrations.new)
  .post(upload.single('image'), registrations.create); // CHANGE SINGLE TO MULTIPLE FOR MULTIPLE IMAGE UPLOADS

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/oauth/github')
  .get(oauth.github);

router.all('*', (req, res) => res.notFound());

module.exports = router;
