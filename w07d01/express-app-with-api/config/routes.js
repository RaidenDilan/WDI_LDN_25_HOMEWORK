const router = require('express').Router();
const propertiesController = require('../controllers/properties');

router.route('/properties')
  .get(propertiesController.index)
  .post(propertiesController.create);

router.route('/properties/:id')
  .get(propertiesController.show)
  .put(propertiesController.update)
  .delete(propertiesController.delete);

// catch all 404 response
router.all('*', (req, res) => res.notFound());

module.exports = router;
