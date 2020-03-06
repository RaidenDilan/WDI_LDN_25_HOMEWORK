const Restaurant = require('../models/restaurant');

function indexRoute(req, res, next) {
  Restaurant
    .find()
    .populate('createdBy')
    .exec()
    .then((restaurants) => res.render('restaurants/index', { restaurants }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('restaurants/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Restaurant
    .create(req.body)
    .then(() => res.redirect('/restaurants'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/restaurants/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.notFound();
      return res.render('restaurants/show', { restaurant });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      return res.render('restaurants/edit', { restaurant });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.notFound();

      for(const field in req.body) {
        restaurant[field] = req.body[field];
      }

      return restaurant.save();
    })
    .then(() => res.redirect(`/restaurants/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/restaurants/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Restaurant
    .findById(req.params.id)
    .exec()
    .then((restaurant) => {
      if(!restaurant) return res.notFound();
      return restaurant.remove();
    })
    .then(() => res.redirect('/restaurants'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Restaurant
  .findById(req.params.id)
  .exec()
  .then((restaurant) => {
    if(!restaurant) return res.notFound();

    restaurant.comments.push(req.body); // create an embedded record
    return restaurant.save();
  })
  .then((restaurant) => res.redirect(`/restaurants/${restaurant.id}`))
  .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Restaurant
  .findById(req.params.id)
  .exec()
  .then((restaurant) => {
    if(!restaurant) return res.notFound();
    // get the embedded record by it's id
    const comment = restaurant.comments.id(req.params.commentId);
    comment.remove();
    restaurant.comments.push(req.body);

    return restaurant.save();
  })
  .then((restaurant) => res.redirect(`/restaurants/${restaurant.id}`))
  .catch(next);
}

// function editCommentRoute(req, res, next) {
//   Restaurant
//   .findById(req.params.id)
//   .exec()
//   .then((restaurant) => {
//     if(!restaurant) return res.notFound();
//     // get the embedded record by it's id
//     const comment = restaurant.comments.id(req.params.commentId);
//     comment.remove();
//
//     return restaurant.save();
//   })
//   .then((restaurant) => res.redirect(`/restaurants/edit/${restaurant.id}`))
//   .catch(next);
// }

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
  // editComment: editCommentRoute
};
