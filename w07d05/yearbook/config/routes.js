const router = require('express').Router();
const students = require('../controllers/students');
const auth = require('../controllers/auth');

const secureRoute = require('../lib/secureRoute');

router.route('/students')
  .get(students.index)
  .post(secureRoute, students.create);

router.route('/students/:id')
  .get(students.show)
  .put(secureRoute, students.update)
  .delete(secureRoute, students.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
