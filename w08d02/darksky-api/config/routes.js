const router = require('express').Router();
const darkskies = require('../controllers/darkskies');

router.get('/weather', darkskies.weather);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
