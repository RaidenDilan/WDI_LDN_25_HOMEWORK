// REQUIRING USER FROM DB
const User = require('../models/user');
// AUTHENTICATION
function authentication(req, res, next) {
  if(!req.session.isAuthenticated) return next();

  User
    .findById(req.session.userId)
    .then((user) => {
      if(!user) {
        return req.session.regenerate(() => {
          req.flash('danger', 'You must be logged in');
          res.redirect('/login');
        });
      }

      req.session.userId = user.id;

      res.locals.user = user;
      res.locals.isLoggedIn = true;

      next();
    })
    .catch(next);
}

module.exports = authentication;
