// DONE
const router = require('express').Router();
// DONE
const beverages = require('../controllers/beverages');
// DONE
router.get('/', (req, res) => res.render('index'));
// DONE
router.route('/beverages')
  .get(beverages.index)
  .post(beverages.create);
// DONE

// router.route('/beverages/new')
//   .get(beverages.new);

router.route('/beverages/:id')
  .get(beverages.show)
  .post(beverages.update)
  .delete(beverages.delete);
// DONE
router.route('/beverages/:id/edit')
  .get(beverages.edit);
// DONE
module.exports = router;
