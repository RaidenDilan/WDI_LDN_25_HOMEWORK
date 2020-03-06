const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res, next) {

  if(req.file) req.body.image = req.file.key;

  User
    .create(req.body)
    .then((user) => {
      req.flash('success', `Thanks for registering, ${user.username}!`);
      res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        req.flash('alert', 'Passwords do not match');
        return res.redirect('/register');
      }
      next(err);
    });
}

function showRoute(req, res) {
  return res.render('registrations/show');
}

function deleteRoute(req, res, next) {
  req.user
    .remove()
    .then(() => {
      req.session.regenerate(() => res.unauthorized('/', 'Your account has been deleted'));
    })
    .catch(next);
}

// FEED ROUTE
function feedRoute(req, res) {
  return res.render('instagrams/feed');
}

function usersRoute(req, res) {
  return res.render('registrations/users');
}

module.exports = {
  new: newRoute,
  show: showRoute,
  feed: feedRoute,
  create: createRoute,
  delete: deleteRoute,
  users: usersRoute
};
