// const User = require('../models/user');
//
// function indexRoute(req, res, next) {
//   User
//     .find()
//     .populate('createdBy')
//     .exec()
//     .then((users) => res.render('users/index', { users }))
//     .catch(next);
// }
//
// function showRoute(req, res, next) {
//   User
//     .findById(req.params.id)
//     .populate('comments.createdBy')
//     .exec()
//     .then((user) => {
//       if(!user) return res.notFound();
//       return res.render('users/show', { user });
//     })
//     .catch(next);
// }
//
// module.exports = {
//   index: indexRoute,
//   show: showRoute
// };
//
//
//
// // const mongoose = require('mongoose');
// //
// // const commentSchema = new mongoose.Schema({
// //   content: { type: String, required: true },
// //   createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// // }, {
// //
// //   timestamps: true
// // });
// //
// // commentSchema.methods.ownedBy = function ownedBy(user) {
// //   return this.createdBy.id === user.id;
// // };
// //
// // const usersSchema = new mongoose.Schema({
// //   image: { type: String },
// //   caption: { type: String },
// //   comments: [ commentSchema ]
// // });
// //
// // module.exports = mongoose.model('User', usersSchema);
