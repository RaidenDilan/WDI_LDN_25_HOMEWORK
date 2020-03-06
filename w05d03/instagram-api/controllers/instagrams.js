const Instagram = require('../models/instagram');

function indexRoute(req, res, next) {
  Instagram
    .find()
    .populate('createdBy')
    .exec()
    .then((instagrams) => res.render('instagrams/index', { instagrams }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('instagrams/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Instagram
    .create(req.body)
    .then(() => res.redirect('/instagrams'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/instagrams/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Instagram
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then((instagram) => {
      if(!instagram) return res.notFound();
      return res.render('instagrams/show', { instagram });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Instagram
    .findById(req.params.id)
    .exec()
    .then((instagram) => {
      return res.render('instagrams/edit', { instagram });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Instagram
    .findById(req.params.id)
    .exec()
    .then((instagram) => {
      if(!instagram) return res.notFound();

      for(const field in req.body) {
        instagram[field] = req.body[field];
      }

      return instagram.save();
    })
    .then(() => res.redirect(`/instagrams/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/instagrams/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Instagram
    .findById(req.params.id)
    .exec()
    .then((instagram) => {
      if(!instagram) return res.notFound();
      return instagram.remove();
    })
    .then(() => res.redirect('/instagrams'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Instagram
  .findById(req.params.id)
  .exec()
  .then((instagram) => {
    if(!instagram) return res.notFound();

    instagram.comments.push(req.body); // create an embedded record
    return instagram.save();
  })
  .then((instagram) => res.redirect(`/instagrams/${instagram.id}`))
  .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Instagram
  .findById(req.params.id)
  .exec()
  .then((instagram) => {
    if(!instagram) return res.notFound();
    // get the embedded record by it's id
    const comment = instagram.comments.id(req.params.commentId);
    comment.remove();
    instagram.comments.push(req.body);

    return instagram.save();
  })
  .then((instagram) => res.redirect(`/instagrams/${instagram.id}`))
  .catch(next);
}

function editCommentRoute(req, res, next) {
  Instagram
  .findById(req.params.id)
  .exec()
  .then((instagram) => {
    if(!instagram) return res.notFound();
    // get the embedded record by it's id
    const comment = instagram.comments.id(req.params.commentId);
    comment.remove();

    return instagram.save();
  })
  .then((instagram) => res.redirect(`/instagrams/edit/${instagram.id}`))
  .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute,
  editComment: editCommentRoute
};
