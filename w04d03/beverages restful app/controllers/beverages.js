// DONE
const Beverage = require('../models/beverage');

// INDEX
function indexRoute(req, res) {
  Beverage
  .find()
  .exec()
  .then((beverages) => {
    res.render('beverages/index', { beverages });
  })
    .catch((err) => {
      res.status(500).end(err);
    });
}

// CREATE
function createRoute(req, res) {
  Beverage
    .create(req.body)
    .then(() => {
      res.redirect('/beverages/');
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

// NEW
function newRoute(req, res) {
  res.render('beverages/new');
}

// SHOW
function showRoute(req, res) {
  Beverage
  .findById(req.params.id)
  .exec()
  .then((beverage) => {
    if (!beverage) return res.status(404).end('Not found');
    res.render('beverages/show', { beverage });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// EDIT
function editRoute(req, res) {
  Beverage
  .findById(req.params.id)
  .exec()
  .then((beverage) => {
    if (!beverage) return res.status(404).end('Not found');
    res.render('beverages/edit', { beverage });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// UPDATE
function updateRoute(req, res) {
  Beverage
  .findById(req.params.id)
  .exec()
  .then((beverage) => {
    if (!beverage) return res.status(404).send('Not found');
    // loops through that object for each field
    for(const field in req.body) {
      beverage[field] = req.body[field];
    }
    return beverage.save();
  })
  .then((beverage) => {
    res.redirect(`/beverages/${ beverage.id }`);
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// DELETE
function deleteRoute(req, res) {
  Beverage
  .findById(req.params.id)
  .exec()
  .then((beverage) => {
    if (!beverage) return res.status(404).send('Not found');
    return beverage.remove();
  })
  .then(() => {
    res.redirect('/beverages');
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// EXPORTS
module.exports = {
  index: indexRoute,
  create: createRoute,
  new: newRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
