function indexRoute(req, res) {
  res.redirect('/books');
}

module.exports = {
  index: indexRoute
};
