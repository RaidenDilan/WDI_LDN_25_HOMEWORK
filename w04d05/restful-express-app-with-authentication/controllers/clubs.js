const Club = require('../models/club');

function clubsIndex(req, res) {
  Club
    .find()
    .then((clubs) => res.render('clubs/index', { clubs }));
}

function clubsNew(req, res) {
  res.render('clubs/new');
}

function clubsCreate(req, res) {
  Club
    .create(req.body)
    .then(() => res.redirect('/clubs'));
}

function clubsShow(req, res, next) {
  Club
    .findById(req.params.id)
    .then((club) => {
      if(!club) res.notFound();
      res.render('clubs/show', { club });
    })
    .catch(next);
}

function clubsEdit(req, res) {
  Club
    .findById(req.params.id)
    .then((club) => {
      if(!club) return res.notFound();
      res.render('clubs/edit', { club });
    });
}

function clubsUpdate(req, res) {
  Club
    .findById(req.params.id)
    .then((club) => {
      if(!club) return res.notFound();

      for(const field in req.body) {
        club[field] = req.body[field];
      }

      return club.save();
    })
    .then((club) => res.redirect(`/club/${club.id}`));
}

function clubsDelete(req, res) {
  Club
    .findById(req.params.id)
    .then((club) => {
      if(!club) return res.notFound();
      return club.remove();
    })
    .then(() => res.redirect('/clubs'));
}

module.exports = {
  index: clubsIndex,
  new: clubsNew,
  create: clubsCreate,
  show: clubsShow,
  edit: clubsEdit,
  update: clubsUpdate,
  delete: clubsDelete
};
